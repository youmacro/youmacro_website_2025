import { createReadStream } from 'node:fs';
import { realpath, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { dirname, extname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const outRoot = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), '../out'));
const port = Number(process.env.PORT || 4173);
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  throw new Error('PORT must be an integer between 0 and 65535.');
}

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.vtt': 'text/vtt; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function withinRoot(path) {
  const name = relative(outRoot, path);
  return name !== '..' && !name.startsWith('../') && !name.startsWith('..\\') && !isAbsolute(name);
}

async function findFile(path) {
  if (!withinRoot(path)) return null;
  try {
    let actual = await realpath(path);
    if (!withinRoot(actual)) return null;
    let info = await stat(actual);
    if (info.isDirectory()) {
      actual = await realpath(resolve(actual, 'index.html'));
      if (!withinRoot(actual)) return null;
      info = await stat(actual);
    }
    return info.isFile() ? { path: actual, size: info.size } : null;
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return null;
    throw error;
  }
}

function parseRange(header, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!match || (!match[1] && !match[2]) || size === 0) return null;
  let start;
  let end;
  if (!match[1]) {
    const suffix = Number(match[2]);
    if (!Number.isSafeInteger(suffix) || suffix <= 0) return null;
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(match[1]);
    end = match[2] ? Number(match[2]) : size - 1;
    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || end < start) return null;
    end = Math.min(end, size - 1);
  }
  return { start, end };
}

function textResponse(req, res, status, message, headers = {}) {
  res.writeHead(status, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Content-Length': Buffer.byteLength(message),
    ...headers,
  });
  res.end(req.method === 'HEAD' ? undefined : message);
}

const server = createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    textResponse(req, res, 405, 'Method not allowed.', { Allow: 'GET, HEAD' });
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
    if (pathname.includes('\0')) throw new Error('Invalid path');
  } catch {
    textResponse(req, res, 400, 'Invalid request path.');
    return;
  }

  try {
    const requested = resolve(outRoot, `.${pathname}`);
    if (!withinRoot(requested)) {
      textResponse(req, res, 403, 'Path is outside the preview directory.');
      return;
    }
    let file = await findFile(requested);
    const found = Boolean(file);
    if (!file) file = await findFile(resolve(outRoot, '404.html'));
    if (!file) {
      textResponse(req, res, 404, 'Page not found.');
      return;
    }

    const headers = {
      'Content-Type': mimeTypes[extname(file.path).toLowerCase()] || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache',
    };
    let range;
    if (found && req.headers.range) {
      range = parseRange(req.headers.range, file.size);
      if (!range) {
        res.writeHead(416, { ...headers, 'Content-Range': `bytes */${file.size}`, 'Content-Length': 0 });
        res.end();
        return;
      }
      headers['Content-Range'] = `bytes ${range.start}-${range.end}/${file.size}`;
    }
    headers['Content-Length'] = range ? range.end - range.start + 1 : file.size;
    res.writeHead(found ? (range ? 206 : 200) : 404, headers);
    if (req.method === 'HEAD' || file.size === 0) {
      res.end();
      return;
    }
    const stream = createReadStream(file.path, range || undefined);
    stream.on('error', () => res.destroy());
    res.on('close', () => stream.destroy());
    stream.pipe(res);
  } catch (error) {
    console.error('Preview request failed:', error.message);
    if (!res.headersSent) textResponse(req, res, 500, 'Could not read the requested file.');
    else res.destroy();
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`YouMacro preview: http://127.0.0.1:${server.address().port}`);
});
