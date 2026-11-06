import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

import HeroVisual from "../components/HeroVisual";
import DownloaderComparison from "../components/DownloaderComparison";
import ThemeToggle from "../components/ThemeToggle";

const STORE = {
  lite: "https://apps.microsoft.com/detail/9NLWCWNH9WHL",
  pro: "https://apps.microsoft.com/detail/9P2V0G3P86BD",
};
const PRIVACY =
  "https://www.privacypolicies.com/live/58ea4285-f8ed-41ad-9bb8-9ef6fb06b600";

const screenshots = [
  {
    file: "01-browser-menu.png",
    label: "Browse & download",
    title: "A right-click is all it takes.",
    description:
      "Right-click a video link, highlight linked video titles, or use Download All to find video links across a supported page.",
    alt: "YouMacro browser with the Download This Link, Download All and Download Selected menu open.",
    note: "Original demonstration media library shown.",
  },
  {
    file: "03-browser-discovery.png",
    label: "Find every link",
    title: "Let YouMacro do the finding.",
    description:
      "Use Download All to find video links across a page. Stop finding links whenever you choose.",
    alt: "YouMacro discovering video links on the demonstration library page.",
    note: "Illustrative discovery status shown.",
  },
  {
    file: "04-downloads-controls.png",
    label: "Your download queue",
    title: "Everything in one place.",
    description:
      "Search, filter, pause, and resume. Keep videos and torrents together, and save your queues for later.",
    alt: "Downloads tab with a searchable queue, progress columns and download controls.",
    note: "Illustrative sample jobs and progress shown.",
  },
  {
    file: "05-settings-lite.png",
    label: "Make it feel like you",
    title: "Your everyday preferences.",
    description:
      "Choose your preferred video resolution, switch themes, and fine-tune browser preferences and download feedback.",
    alt: "Settings Lite tab showing video resolution, theme and browser preferences.",
    note: "Available in both Lite and Pro.",
  },
  {
    file: "02-settings-pro.png",
    label: "More control with Pro",
    title: "Your downloads. Your rules.",
    description:
      "Set up to 999 simultaneous downloads across different sites, choose your download folder, save audio only, and include available subtitles. All 999 from one domain will likely be throttled. Actual concurrency depends on your PC, connection, and source websites.",
    alt: "Settings Pro tab with parallel download count, destination directory, audio and subtitle controls.",
    note: "These additional controls require YouMacro Pro.",
    pro: true,
  },
  {
    file: "06-shortcuts.png",
    label: "Keyboard shortcuts",
    title: "Find your own rhythm.",
    description:
      "Customize shortcuts for download and queue commands, so the actions you use most are always close.",
    alt: "YouMacro keyboard shortcut settings for download and queue commands.",
    note: "Available in both Lite and Pro.",
  },
  {
    file: "07-tutorials.png",
    label: "Built-in tutorials",
    title: "A helping hand, built in.",
    description:
      "Search step-by-step tutorials with screenshots, right inside the app. They work offline, too.",
    alt: "YouMacro Tutorials tab showing searchable step-by-step instructions and screenshots.",
    note: "Available in both Lite and Pro.",
  },
  {
    file: "08-downloads-dark-theme.png",
    label: "A darker side",
    title: "Easy on the eyes.",
    description:
      "Prefer a darker workspace? Switch to Dark theme and keep the same familiar download controls.",
    alt: "YouMacro Downloads tab in Dark theme, with the same organized queue.",
    note: "Illustrative sample jobs and progress shown.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WindowsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
      <path d="M1 1h8v8H1zm10 0h8v8h-8zM1 11h8v8H1zm10 0h8v8h-8z" />
    </svg>
  );
}

function StepIcon({ step }: { step: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {step === 1 && (
        <>
          <rect x="7" y="9" width="34" height="30" rx="5" />
          <path d="M7 18h34M13 14h1m5 0h1M21 25l9 5-9 5z" />
        </>
      )}
      {step === 2 && (
        <>
          <path d="m13 8 23 18-12 2-5 12zM29 32l6 8" />
          <path d="M32 9v6m6 4h6M35 14l5-5" />
        </>
      )}
      {step === 3 && (
        <>
          <path d="M24 7v23m-9-9 9 9 9-9M9 31v9h30v-9" />
          <path d="M16 40h16" />
        </>
      )}
    </svg>
  );
}

function StoreLink({
  edition,
  children,
}: {
  edition: "lite" | "pro";
  children: string;
}) {
  return (
    <a
      className={`button button-${edition === "lite" ? "primary" : "pro"}`}
      href={STORE[edition]}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WindowsIcon />
      <span>{children}</span>
      <Arrow diagonal />
    </a>
  );
}

export default function Home() {
  const [edition, setEdition] = useState<"lite" | "pro">("lite");
  const [activeShot, setActiveShot] = useState(0);
  const [playbackNote, setPlaybackNote] = useState("");
  const player = useRef<HTMLVideoElement>(null);
  const lightbox = useRef<HTMLDialogElement>(null);
  const shot = screenshots[activeShot]!;
  const chapters =
    edition === "lite"
      ? [0.4, 8.872, 18.875, 46.982]
      : [0.4, 8.891, 18.899, 46.899];

  function seek(seconds: number) {
    const video = player.current;
    if (!video) return;
    const jumpToChapter = () => {
      video.currentTime = seconds;
    };
    if (video.readyState >= 1) jumpToChapter();
    else
      video.addEventListener("loadedmetadata", jumpToChapter, { once: true });
    video
      .play()
      .then(() => setPlaybackNote(""))
      .catch(() => setPlaybackNote("Press play in the video to continue."));
  }

  return (
    <>
      <Head>
        <title>YouMacro — Bulk Video Downloader for Windows</title>
        <meta
          name="description"
          content="Download a whole page, selected videos, or a single clip. YouMacro Pro supports up to 999 simultaneous downloads across different sites on Windows."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://youmacro.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouMacro — Bulk Video Downloader for Windows"
        />
        <meta
          property="og:description"
          content="One video. Your selection. A whole page. Download hundreds of videos in parallel across different sites with YouMacro Pro for Windows."
        />
        <meta property="og:url" content="https://youmacro.com/" />
        <meta
          property="og:image"
          content="https://youmacro.com/media/youmacro-artwork.png"
        />
        <meta
          property="og:image:alt"
          content="YouMacro pink cassette on a soft pink and light blue background"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="hero-surface" id="top">
        <header className="site-header container">
          <a className="brand" href="#top" aria-label="YouMacro home">
            <img
              className="brand-icon"
              src="/media/app-icon.png"
              alt=""
              width="40"
              height="40"
            />
            <span>
              YouMacro<span className="brand-dot">.</span>
            </span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#compare">Compare</a>
            <a href="#tour">Watch the demo</a>
            <a href="#editions">Lite &amp; Pro</a>
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <a className="header-download" href="#editions">
              Get the app <Arrow diagonal />
            </a>
          </div>
        </header>

        <main id="main">
          <section className="hero container" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="tiny-dot" /> Bulk video downloads. Made for
                Windows.
              </p>
              <h1 id="hero-title">
                Download
                <br />
                videos.
                <br />
                <span>
                  In bulk<span className="hero-period">.</span>
                </span>
              </h1>
              <p className="hero-description">
                One video. Your selection. A whole page. Save them in a few
                clicks, then download <strong>hundreds in parallel</strong>{" "}
                across different sites with YouMacro Pro.
              </p>
              <div className="hero-actions">
                <StoreLink edition="lite">Get YouMacro Lite</StoreLink>
                <a className="text-link" href="#tour">
                  <span className="play-small" aria-hidden="true">
                    ▶
                  </span>{" "}
                  Watch the demo
                </a>
              </div>
              <p className="hero-footnote">
                Windows · Microsoft Store ·{" "}
                <a href="#editions">Compare Lite &amp; Pro ↗</a>
              </p>
            </div>
            <HeroVisual />
          </section>
          <div className="intro-strip container">
            <span>
              <span aria-hidden="true">↳</span> Single, selected, or all videos
            </span>
            <span>
              <span aria-hidden="true">◎</span> Up to 999 across sites with Pro
            </span>
            <span>
              <span aria-hidden="true">✳</span> Pause, resume &amp; manage your
              queue
            </span>
          </div>

          <section
            className="section workflow container"
            id="how-it-works"
            aria-labelledby="workflow-title"
          >
            <div className="section-intro">
              <div>
                <p className="eyebrow">01 / Three ways to download</p>
                <h2 id="workflow-title">
                  Download exactly
                  <br />
                  <span>what you want.</span>
                </h2>
              </div>
              <p>
                Browse a supported site inside YouMacro.
                <br />
                Right-click. Choose a mode. Start downloading.
              </p>
            </div>
            <ul className="workflow-steps">
              <li>
                <div className="step-topline">
                  <StepIcon step={1} />
                  <span className="step-number">01</span>
                </div>
                <span className="download-mode">Download This Link</span>
                <h3>Just that one video.</h3>
                <p>
                  Right-click a video link to save the clip you came for. Keep a
                  tutorial, a reference, or your next favorite without adding
                  the rest of the page.
                </p>
                <a
                  className="mode-demo"
                  href="#tour"
                  onClick={() => seek(chapters[0]!)}
                >
                  Watch the single-video demo <Arrow diagonal />
                </a>
              </li>
              <li>
                <div className="step-topline">
                  <StepIcon step={2} />
                  <span className="step-number">02</span>
                </div>
                <span className="download-mode">Download Selected</span>
                <h3>Your picks. One batch.</h3>
                <p>
                  Highlight the linked video titles you want, then choose
                  Download Selected. Queue your picks together without copying
                  each link individually.
                </p>
                <a
                  className="mode-demo"
                  href="#tour"
                  onClick={() => seek(chapters[1]!)}
                >
                  Watch selected downloads <Arrow diagonal />
                </a>
              </li>
              <li>
                <div className="step-topline">
                  <StepIcon step={3} />
                  <span className="step-number">03</span>
                </div>
                <span className="download-mode">Download All</span>
                <h3>Grab the whole page.</h3>
                <p>
                  Find and queue video links across a supported page with
                  Download All. Save a batch of discoveries without the
                  copy-and-paste routine.
                </p>
                <a
                  className="mode-demo"
                  href="#tour"
                  onClick={() => seek(chapters[2]!)}
                >
                  Watch whole-page downloads <Arrow diagonal />
                </a>
              </li>
            </ul>
            <aside
              className="parallel-callout"
              aria-labelledby="parallel-title"
            >
              <div className="parallel-stat">
                <strong>
                  <span>Up to</span>999
                </strong>
                <span>
                  simultaneous downloads
                  <br />
                  across different sites
                  <br />
                  with YouMacro Pro
                </span>
              </div>
              <div className="parallel-copy">
                <h3 id="parallel-title">Hundreds at once. One queue.</h3>
                <p>
                  Stop waiting for one video to finish before the next starts.
                  Pro lets you set up to 999 simultaneous downloads across
                  different sites. Search, pause, and resume your downloads from
                  one place.
                </p>
                <p className="parallel-note">
                  If all 999 downloads come from the same domain, that website
                  will likely throttle them. Actual concurrency and speed depend
                  on your PC, connection, and source websites. YouMacro reduces
                  new starts when a site throttles downloads.
                </p>
              </div>
              <a className="button button-pro" href="#editions">
                Explore Pro <Arrow diagonal />
              </a>
            </aside>
          </section>

          <section
            className="tour-section"
            id="tour"
            aria-labelledby="tour-title"
          >
            <div className="container">
              <div className="section-intro">
                <div>
                  <p className="eyebrow">02 / Watch real downloads</p>
                  <h2 id="tour-title">
                    See all three modes.<span>In just 60 seconds.</span>
                  </h2>
                </div>
                <div
                  className="edition-switch"
                  aria-label="Choose a walkthrough"
                >
                  {(["lite", "pro"] as const).map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={edition === value}
                      onClick={() => {
                        player.current?.pause();
                        setEdition(value);
                        setPlaybackNote("");
                      }}
                    >
                      YouMacro {value === "lite" ? "Lite" : "Pro"}
                    </button>
                  ))}
                </div>
              </div>
              <div className="tour-layout">
                <div className="tour-copy">
                  <span className={`edition-label ${edition}`}>
                    {edition === "lite" ? "MEET LITE" : "MEET PRO"}
                  </span>
                  <h3>
                    {edition === "lite"
                      ? "Batch downloads, made simple."
                      : "Bigger batches. More control."}
                  </h3>
                  <p>
                    Follow a continuous walkthrough: download one video, a
                    selection, and a whole page, then explore Downloads,
                    Tutorials, and Settings.
                  </p>
                  <p className="tour-extra">
                    {edition === "lite"
                      ? "The tour also previews the extra controls available with Pro."
                      : "See where to set your parallel-download limit and choose your download folder. Pro supports up to 999 simultaneous downloads across different sites. All 999 from one domain will likely be throttled."}
                  </p>
                  <div
                    className="chapter-links"
                    aria-label="Jump to a video chapter"
                  >
                    <span>JUMP TO</span>
                    <button type="button" onClick={() => seek(chapters[0]!)}>
                      01 <span>Single video</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                    <button type="button" onClick={() => seek(chapters[1]!)}>
                      02 <span>Selected videos</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                    <button type="button" onClick={() => seek(chapters[2]!)}>
                      03 <span>All videos</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                    <button type="button" onClick={() => seek(chapters[3]!)}>
                      04 <span>Settings &amp; Pro</span>
                      <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </div>
                <div className="video-card">
                  <div className="video-topline">
                    <span>
                      <span className="tiny-dot" /> YouMacro{" "}
                      {edition === "lite" ? "Lite" : "Pro"}
                    </span>
                    <span>60 seconds · Narrated walkthrough</span>
                  </div>
                  <video
                    key={edition}
                    ref={player}
                    controls
                    playsInline
                    preload="none"
                    poster={`/media/${edition}-poster.webp`}
                    aria-label={`YouMacro ${edition} narrated app walkthrough`}
                  >
                    <source
                      src={`/media/youmacro-${edition}.mp4`}
                      type="video/mp4"
                    />
                    <track
                      kind="captions"
                      src={`/media/youmacro-${edition}.vtt`}
                      srcLang="en"
                      label="English"
                      default
                    />
                    Your browser does not support this video.{" "}
                    <a href={`/media/youmacro-${edition}.mp4`}>
                      Download the walkthrough.
                    </a>
                  </video>
                  <div className="video-bottomline">
                    <span>
                      Single. Selected. All. See each one land in Downloads.
                    </span>
                    <a href={`/media/youmacro-${edition}.vtt`}>Captions ↗</a>
                  </div>
                  <p
                    className={playbackNote ? "video-feedback" : "sr-only"}
                    role="status"
                  >
                    {playbackNote}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section gallery-section container"
            id="features"
            aria-labelledby="gallery-title"
          >
            <div className="section-intro">
              <div>
                <p className="eyebrow">03 / A closer look</p>
                <h2 id="gallery-title">
                  More downloads.
                  <br />
                  <span>Less busywork.</span>
                </h2>
              </div>
              <p>
                Search, pause, resume, and save your queue.
                <br />
                Keep even a big batch easy to manage.
              </p>
            </div>
            <div className="gallery-layout">
              <div
                className="gallery-menu"
                aria-label="Choose an app screenshot"
              >
                {screenshots.map((item, index) => (
                  <button
                    key={item.file}
                    type="button"
                    aria-pressed={activeShot === index}
                    aria-controls="screenshot-panel"
                    onClick={() => setActiveShot(index)}
                  >
                    <span className="gallery-number">0{index + 1}</span>
                    <span>{item.label}</span>
                    {item.pro ? (
                      <small>PRO</small>
                    ) : (
                      <span className="gallery-arrow" aria-hidden="true">
                        ↗
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <figure className="gallery-panel" id="screenshot-panel">
                <button
                  className="screenshot-expand"
                  type="button"
                  onClick={() => lightbox.current?.showModal()}
                  aria-label={`Enlarge screenshot: ${shot.label}`}
                >
                  <img
                    src={`/media/screenshots/${shot.file}`}
                    width="1600"
                    height="900"
                    alt={shot.alt}
                    loading="lazy"
                  />
                  <span className="expand-hint">
                    View full size <Arrow diagonal />
                  </span>
                </button>
                <figcaption aria-live="polite">
                  <div>
                    <h3>{shot.title}</h3>
                    <p>{shot.description}</p>
                    <small>{shot.note}</small>
                  </div>
                  <span className="gallery-count">
                    0{activeShot + 1}
                    <span> / 08</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </section>

          <DownloaderComparison />

          <section
            className="editions-section"
            id="editions"
            aria-labelledby="editions-title"
          >
            <div className="container">
              <div className="section-heading-center">
                <p className="eyebrow">Choose your download capacity</p>
                <h2 id="editions-title">
                  A few at once?<span> Or hundreds?</span>
                </h2>
                <p>
                  Both editions download single videos, selected videos, and
                  whole-page batches. Pro gives you more parallel capacity and
                  output options.
                </p>
              </div>
              <div className="edition-cards">
                <article className="edition-card lite-card">
                  <div className="edition-card-top">
                    <span className="edition-label lite">
                      THE EVERYDAY ESSENTIALS
                    </span>
                    <span className="edition-symbol" aria-hidden="true">
                      ↳
                    </span>
                  </div>
                  <h3>YouMacro Lite</h3>
                  <p className="edition-description">
                    Everyday batch downloading, with up to 5 downloads running
                    at once.
                  </p>
                  <ul>
                    <li>Download single, selected, or all videos</li>
                    <li>Run up to 5 simultaneous downloads</li>
                    <li>Choose your preferred resolution and theme</li>
                    <li>Customize shortcuts and explore built-in tutorials</li>
                  </ul>
                  <StoreLink edition="lite">
                    Get Lite from Microsoft Store
                  </StoreLink>
                  <p className="store-note">
                    View availability and details in the Store.
                  </p>
                </article>
                <article className="edition-card pro-card">
                  <div className="edition-card-top">
                    <span className="edition-label pro">
                      FOR THE POWER DOWNLOADERS
                    </span>
                    <span className="edition-symbol" aria-hidden="true">
                      ✳
                    </span>
                  </div>
                  <h3>YouMacro Pro</h3>
                  <p className="edition-description">
                    Everything in Lite, with a configurable limit of up to 999
                    simultaneous downloads across different sites.
                  </p>
                  <ul>
                    <li>
                      Download hundreds in parallel across different sites
                    </li>
                    <li>Choose the folder your downloads go to</li>
                    <li>Download just the audio when you want it</li>
                    <li>Include available subtitles and translations</li>
                  </ul>
                  <StoreLink edition="pro">
                    Get Pro from Microsoft Store
                  </StoreLink>
                  <p className="store-note">
                    View pricing and details in the Store.
                  </p>
                </article>
              </div>
              <p className="edition-context">
                These are concurrency limits, not speed guarantees. Actual
                concurrency and speed depend on your PC, connection, and the
                source websites. All 999 downloads from the same domain will
                likely be throttled by that website.
              </p>
            </div>
          </section>

          <section
            className="section faq-section container"
            aria-labelledby="faq-title"
          >
            <div>
              <p className="eyebrow">The need-to-knows</p>
              <h2 id="faq-title">
                Good questions.
                <br />
                <span>Quick answers.</span>
              </h2>
              <p>
                There’s more help inside the app.
                <br />
                Open Tutorials whenever you need a hand.
              </p>
            </div>
            <div className="faq-list">
              <details>
                <summary>
                  How do Lite and Pro differ?<span aria-hidden="true">+</span>
                </summary>
                <p>
                  Both editions include all three download modes, the browser,
                  download queue, shortcuts, and tutorials. Lite runs up to 5
                  downloads at once. Pro lets you set up to 999 simultaneous
                  downloads across different sites, choose your destination
                  folder, save audio only, and include available subtitles and
                  translations. A website will likely throttle downloads if all
                  999 come from the same domain.
                </p>
              </details>
              <details>
                <summary>
                  Can I really download hundreds in parallel?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Yes. YouMacro Pro accepts a simultaneous-download setting of
                  up to 999 across different sites. If all 999 downloads come
                  from the same domain, that website will likely throttle them.
                  The number actually running depends on your PC, connection,
                  available jobs, and source websites. YouMacro reduces new
                  starts when a site throttles downloads. Lite supports up to 5
                  simultaneous downloads.
                </p>
              </details>
              <details>
                <summary>
                  How do whole-page and selected downloads work?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Download All discovers video links across the current page,
                  including scrollable sections. Pagination or “load more”
                  buttons may need your input. For a smaller batch, highlight
                  the linked video titles you want and choose Download Selected.
                  Available videos depend on the source website.
                </p>
              </details>
              <details>
                <summary>
                  Where do I find my downloaded files?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Use the Downloads tab to manage your queue and open completed
                  downloads. In Pro, you can customize the destination directory
                  in Settings Pro.
                </p>
              </details>
              <details>
                <summary>
                  Does every website work?<span aria-hidden="true">+</span>
                </summary>
                <p>
                  YouMacro supports many video and social websites. Availability
                  depends on the site and the content. Use it to download
                  content you own or have permission to save.
                </p>
              </details>
            </div>
          </section>

          <section className="closing-section container">
            <div>
              <p className="eyebrow">
                One video. Your selection. The whole page.
              </p>
              <h2>
                Your videos.
                <br />
                <span>Downloaded together.</span>
              </h2>
              <a className="button button-primary" href="#editions">
                Get YouMacro <Arrow diagonal />
              </a>
            </div>
            <img
              src="/media/youmacro-artwork.webp"
              width="1200"
              height="675"
              alt=""
              loading="lazy"
            />
          </section>
        </main>
        <footer id="privacy" className="site-footer container">
          <div className="footer-top">
            <a className="brand" href="#top">
              <img
                className="brand-icon"
                src="/media/app-icon.png"
                width="36"
                height="36"
                alt=""
              />
              <span>
                YouMacro<span className="brand-dot">.</span>
              </span>
            </a>
            <nav aria-label="Footer navigation">
              <a href={STORE.lite} target="_blank" rel="noopener noreferrer">
                Get Lite ↗
              </a>
              <a href={STORE.pro} target="_blank" rel="noopener noreferrer">
                Get Pro ↗
              </a>
              <a href={PRIVACY} target="_blank" rel="noopener noreferrer">
                Privacy policy ↗
              </a>
              <Link id="share" href="/share/">
                Share YouMacro
              </Link>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} YouMacro</span>
            <span>
              Only download content you own or have permission to save.
            </span>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
      <dialog
        className="screenshot-dialog"
        ref={lightbox}
        aria-labelledby="dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) lightbox.current?.close();
        }}
      >
        <div className="dialog-topline">
          <h2 id="dialog-title">{shot.label}</h2>
          <button
            type="button"
            onClick={() => lightbox.current?.close()}
            aria-label="Close enlarged screenshot"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <img
          src={`/media/screenshots/${shot.file}`}
          alt={shot.alt}
          width="1600"
          height="900"
        />
        <p>{shot.note}</p>
      </dialog>
    </>
  );
}
