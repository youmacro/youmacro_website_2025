# YouMacro website

The public website for YouMacro Lite and YouMacro Pro, built with Next.js 14, React 18, TypeScript and Tailwind CSS. This refresh uses the approved pink and light-blue cassette artwork, current app screenshots and narrated walkthroughs. It has not been deployed.

## Pages and content

- `/`: introduction, three-step download workflow, switchable Lite/Pro video tour, screenshot gallery with an enlarged view, edition comparison, FAQs and Store links.
- `/share/`: copy the website link or open the device's native share options, with a manual-copy fallback.
- Existing links to `#top`, `#how-it-works`, `#features`, `#privacy` and `#share` remain supported. New sections include `#tour` and `#editions`.

The main page is `src/pages/index.tsx`; the share page is `src/pages/share.tsx`; shared styling is in `src/styles/global.css`. Keep the edition comparison accurate: custom destination folders, parallel-download limits, audio-only output and available subtitle options belong to Pro. More parallel downloads can help batches finish faster; video resolution is a preference subject to source availability.

## Local development and checks

From the website repository, with Node.js and npm installed:

```sh
npm ci
npm run dev
```

The development server normally runs at `http://localhost:3000`. Before delivery, run:

```sh
npm run lint
npm run check-types
npm run build-prod
```

`next.config.js` sets `output: 'export'`, trailing slashes and unoptimized images. The production build writes the static website to `out/`. Preview that directory with the included local server:

```sh
npm run preview
```

The preview server runs at `http://127.0.0.1:4173` and supports HTTP byte ranges for video seeking. `npm start` is an alias for the same preview command. `next start` is not used for this static export. The existing Netlify configuration builds with `npm run build-prod` and publishes `out`. No deployment has been performed for this refresh, and no CI secrets or deployment credentials are included or required to build locally.

## Product links

| Edition | Microsoft Store product ID | Destination |
| --- | --- | --- |
| YouMacro Lite | `9NLWCWNH9WHL` | https://apps.microsoft.com/detail/9NLWCWNH9WHL |
| YouMacro Pro | `9P2V0G3P86BD` | https://apps.microsoft.com/detail/9P2V0G3P86BD |

The canonical site is `https://youmacro.com/`. Retain the existing privacy-policy destination when editing navigation. The inherited `src/pages/_app.tsx` loads the existing Google Analytics tag; app privacy statements should not be presented as a claim that the website has no analytics.

## Media provenance

Website assets live in `public/media/` and should be served from the same origin as the pages and captions.

- `youmacro-lite.mp4` and `youmacro-pro.mp4` are exact copies of the approved compact previews from `C:\Users\shing\Videos\YouMacro Store Media\2026-10-31 YouTube Search\{lite,pro}\video\youmacro-preview-1080p.mp4`. Each is approximately one minute at 1920×1080/30 fps, H.264 with AAC stereo audio, about 14.1 MB for Lite and 13.9 MB for Pro. The previews are already optimized for delivery; this website refresh adds no video or audio generation loss. Their encoded AAC payloads match the approved Store masters, retaining the same narration and music.
- Matching `.vtt` files provide English captions. `lite-poster.webp` and `pro-poster.webp` show genuine Downloads progress at 35.5 seconds in the matching approved recording. Videos load on user request rather than autoplaying; switching editions pauses the previous video.
- `screenshots/` contains the eight approved Pro screenshots from `E:\src\youmacro_desktop\design\store-listing-2026-10-31-pink-blue\pro\screenshots`. Shared features are identified as available in both editions; the Pro settings image is explicitly labeled. Preserve notes identifying illustrative sample jobs, progress and discovery status.
- `app-icon.png` preserves the original cassette icon. `youmacro-artwork.png` is the approved text-free hero; its WebP derivative is resized to 1200×675 for display. Both originate in the same approved pink-blue package.

File hashes, codec checks, audio identity and caption validation are recorded in `E:\src\youmacro_desktop\design\website-refresh-2026-10-31\media\media-manifest.json`; exact narration chapter times are in the adjacent `chapters.json`. Do not substitute older Store trailers or the much larger Store master files when updating website media.

Keep the existing `LICENSE` notice when redistributing the website source.
