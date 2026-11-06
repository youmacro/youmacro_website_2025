import styles from "./DownloaderComparison.module.css";

const sources = [
  {
    title: "4K Download: in-app browser",
    url: "https://www.4kdownload.com/faq/faq-use-the-in-app-browser",
  },
  {
    title: "4K Download: batch downloads, selection, and current plan limits",
    url: "https://www.4kdownload.com/blog/2026/05/25/best-free-youtube-downloader-in-2026/",
  },
  {
    title: "JDownloader: adding, crawling, and selecting links",
    url: "https://support.jdownloader.org/en/knowledgebase/article/linkgrabber-how-to-add-links",
  },
  {
    title: "JDownloader: simultaneous downloads and Domain Rules",
    url: "https://support.jdownloader.org/en/knowledgebase/article/simultaneous-downloads-connections-chunks",
  },
  {
    title: "IDM: browser video capture and video-page limitations",
    url: "https://www.internetdownloadmanager.com/register/new_faq/video5.html",
  },
  {
    title: "IDM: download queues and simultaneous files",
    url: "https://www.internetdownloadmanager.com/register/new_faq/functions5.html",
  },
  {
    title: "IDM: choosing file links in your browser",
    url: "https://www.internetdownloadmanager.com/support/using_idm/starting.html",
  },
];

function SourceRef({ number }: { number: number }) {
  const source = sources[number - 1]!;
  return (
    <sup className={styles.reference}>
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Source ${number}: ${source.title}`}
      >
        [{number}]
      </a>
    </sup>
  );
}

export default function DownloaderComparison() {
  return (
    <section
      id="compare"
      className={`container ${styles.section}`}
      aria-labelledby="comparison-title"
    >
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">Side by side</p>
          <h2 id="comparison-title">
            Compare the
            <br />
            <span>download workflow.</span>
          </h2>
        </div>
        <p className={styles.intro}>
          Compare YouMacro with three established Windows apps with graphical
          interfaces: 4K Video Downloader Plus, JDownloader 2, and Internet
          Download Manager.
        </p>
      </div>

      <p className={styles.scrollHint} id="comparison-scroll-hint">
        Swipe to compare <span aria-hidden="true">↔</span>
      </p>
      <div
        className={styles.tableScroll}
        role="region"
        aria-label="Video downloader feature comparison"
        aria-describedby="comparison-notes"
        tabIndex={0}
      >
        <table className={styles.table}>
          <caption className="sr-only">
            Download workflows and simultaneous file downloads for YouMacro Pro
            and three alternative Windows downloaders with graphical interfaces.
          </caption>
          <colgroup>
            <col className={styles.featureColumn} />
            <col className={styles.productColumn} />
            <col className={styles.productColumn} />
            <col className={styles.productColumn} />
            <col className={styles.productColumn} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">Your download workflow</th>
              <th scope="col" className={styles.youmacro}>
                <span className={styles.productName}>YouMacro Pro</span>
                <span className={styles.productNote}>
                  Browse. Select. Download.
                </span>
              </th>
              <th scope="col">
                <span className={styles.productName}>
                  4K Video Downloader Plus
                </span>
              </th>
              <th scope="col">
                <span className={styles.productName}>JDownloader 2</span>
              </th>
              <th scope="col">
                <span className={styles.productName}>
                  Internet Download Manager
                </span>
                <span className={styles.productNote}>IDM</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Add videos</th>
              <td className={styles.youmacro}>
                Browse and right-click inside the app.
              </td>
              <td>
                In-app browser or pasted video links.
                <SourceRef number={1} />
              </td>
              <td>
                Clipboard, LinkGrabber, or browser add-on.
                <SourceRef number={3} />
              </td>
              <td>
                Play a video in your browser, then use IDM’s download panel.
                <SourceRef number={5} />
              </td>
            </tr>
            <tr>
              <th scope="row">Download a batch</th>
              <td className={styles.youmacro}>
                <strong>Download All</strong> finds video links across the
                current supported page.
              </td>
              <td>
                Playlists, channels, and YouTube search results.
                <SourceRef number={2} />
              </td>
              <td>
                Collect links and crawl page URLs with LinkGrabber.
                <SourceRef number={3} />
              </td>
              <td>
                Queue detected videos individually; no automatic video-page or
                playlist import.
                <SourceRef number={5} />
                <SourceRef number={6} />
              </td>
            </tr>
            <tr>
              <th scope="row">Pick only what you want</th>
              <td className={styles.youmacro}>
                Highlight linked video titles, then choose{" "}
                <strong>Download Selected.</strong>
              </td>
              <td>
                Choose videos from a parsed playlist or channel.
                <SourceRef number={2} />
              </td>
              <td>
                Select the links you want in LinkGrabber.
                <SourceRef number={3} />
              </td>
              <td>
                Choose detected clips, or select direct file links in your
                browser.
                <SourceRef number={5} />
                <SourceRef number={7} />
              </td>
            </tr>
            <tr>
              <th scope="row">Download files in parallel</th>
              <td className={styles.youmacro}>
                <strong className={styles.parallelNumber}>Up to 999</strong>
                <span>
                  at once across different sites with Pro. Lite supports 5 at a
                  time.
                </span>
              </td>
              <td>
                Up to 7 in the current Pro plan; limits vary by license.
                <SourceRef number={2} />
              </td>
              <td>
                Up to 20 in global settings. Advanced Domain Rules can exceed
                this.
                <SourceRef number={4} />
              </td>
              <td>
                Set simultaneous files per queue in Scheduler.
                <SourceRef number={6} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={styles.notes} id="comparison-notes">
        Reviewed November 6, 2026. Features depend on the website, edition, and
        version. Parallel-download limits describe simultaneous files, not a
        speed benchmark or a guaranteed number of active transfers. Connections
        within one file are not separate downloads. A website will likely
        throttle downloads if all 999 come from the same domain. YouMacro’s page
        scan covers the current page; move to the next page to discover more.
      </p>
      <details className={styles.sources}>
        <summary>Sources &amp; comparison details</summary>
        <ol>
          {sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noopener noreferrer">
                {source.title} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
        <p>
          4K Download’s{" "}
          <a
            href="https://www.4kdownload.com/buy/videodownloader-8"
            target="_blank"
            rel="noopener noreferrer"
          >
            current license comparison
          </a>{" "}
          lists up to 7 simultaneous videos for Pro. JDownloader’s{" "}
          <a
            href="https://support.jdownloader.org/en/knowledgebase/article/domain-rules"
            target="_blank"
            rel="noopener noreferrer"
          >
            Domain Rules
          </a>{" "}
          can exceed its global setting, subject to host and plugin limits.
          IDM’s concurrency setting applies to queued downloads, not transfers
          started manually. Its{" "}
          <a
            href="https://www.internetdownloadmanager.com/register/new_faq/functions20.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site Grabber does not automate streaming-video capture
          </a>
          ; selecting direct file links differs from discovering videos inside
          web players.
        </p>
      </details>
    </section>
  );
}
