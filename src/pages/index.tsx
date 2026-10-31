import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";

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
      "Choose a video, a selection, or every video on a page from the built-in browser.",
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
      "Set parallel downloads to help batches finish faster, choose your download folder, save audio only, and include available subtitles.",
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
        <title>YouMacro — A simpler way to download videos</title>
        <meta
          name="description"
          content="Download one video, selected videos, or a whole page with YouMacro for Windows. Explore Lite and Pro, watch the app in action, and get it from the Microsoft Store."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fff7fb" />
        <link rel="canonical" href="https://youmacro.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="YouMacro — A simpler way to download videos"
        />
        <meta
          property="og:description"
          content="One video, a few favorites, or the whole page. Meet YouMacro Lite and Pro for Windows."
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
            <a href="#tour">Take a tour</a>
            <a href="#editions">Lite &amp; Pro</a>
          </nav>
          <a className="header-download" href="#editions">
            Get YouMacro <Arrow />
          </a>
        </header>

        <main id="main">
          <section className="hero container" aria-labelledby="hero-title">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="tiny-dot" /> A little app for your good finds
              </p>
              <h1 id="hero-title">
                Find it.
                <br />
                Save it.
                <br />
                <span>Make it yours.</span>
              </h1>
              <p className="hero-description">
                One video, a few favorites, or the whole page. YouMacro makes
                downloading feel simple.
              </p>
              <div className="hero-actions">
                <StoreLink edition="lite">Get YouMacro Lite</StoreLink>
                <a className="text-link" href="#tour">
                  <span className="play-small" aria-hidden="true">
                    ▶
                  </span>{" "}
                  See it in action
                </a>
              </div>
              <p className="hero-footnote">
                Made for Windows. Available on the Microsoft Store.
              </p>
            </div>
            <div className="hero-visual">
              <div className="artwork-frame">
                <img
                  src="/media/youmacro-artwork.webp"
                  alt="A pink cassette on a soft light blue and pink background"
                  width="1200"
                  height="675"
                  fetchPriority="high"
                />
                <span className="artwork-caption">Keep the good stuff.</span>
              </div>
              <a
                href="#features"
                className="hero-app-preview"
                aria-label="Explore screenshots of YouMacro"
              >
                <div className="preview-label">
                  <span className="tiny-dot" /> A peek inside YouMacro{" "}
                  <Arrow diagonal />
                </div>
                <img
                  src="/media/screenshots/01-browser-menu.png"
                  alt="YouMacro browser with its right-click download menu"
                  width="1600"
                  height="900"
                />
              </a>
            </div>
          </section>
          <div className="intro-strip container">
            <span>
              <span aria-hidden="true">↳</span> Right-click to download
            </span>
            <span>
              <span aria-hidden="true">◎</span> Everything in one queue
            </span>
            <span>
              <span aria-hidden="true">◈</span> Lite to start. Pro to
              personalize.
            </span>
          </div>

          <section
            className="section workflow container"
            id="how-it-works"
            aria-labelledby="workflow-title"
          >
            <div className="section-intro">
              <div>
                <p className="eyebrow">A familiar flow</p>
                <h2 id="workflow-title">From a find to a file.</h2>
              </div>
              <p>
                No juggling links and windows.
                <br />
                Browse, choose, and follow along in the app.
              </p>
            </div>
            <ol className="workflow-steps">
              <li>
                <span className="step-number">01</span>
                <h3>Browse a little.</h3>
                <p>
                  Open a supported website in YouMacro’s built-in browser and
                  find something you want to keep.
                </p>
              </li>
              <li>
                <span className="step-number">02</span>
                <h3>Choose what to save.</h3>
                <p>
                  Right-click to download a single video, videos near selected
                  text, or every video on the page.
                </p>
              </li>
              <li>
                <span className="step-number">03</span>
                <h3>Watch it come together.</h3>
                <p>
                  Switch to Downloads to see your new items, check progress, and
                  manage your queue.
                </p>
              </li>
            </ol>
          </section>

          <section
            className="tour-section"
            id="tour"
            aria-labelledby="tour-title"
          >
            <div className="container">
              <div className="section-intro">
                <div>
                  <p className="eyebrow">The real app, in motion</p>
                  <h2 id="tour-title">Take a one-minute tour.</h2>
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
                      ? "Your everyday downloading companion."
                      : "A little more power. A lot more control."}
                  </h3>
                  <p>
                    Follow a continuous walkthrough: download one video, a
                    selection, and a whole page, then explore Downloads,
                    Tutorials, and Settings.
                  </p>
                  <p className="tour-extra">
                    {edition === "lite"
                      ? "The tour also previews the extra controls available with Pro."
                      : "See how Pro lets you choose your download folder and set parallel downloads, which can help batches finish faster."}
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
                <p className="eyebrow">A place for everything</p>
                <h2 id="gallery-title">Get to know your workspace.</h2>
              </div>
              <p>
                Thoughtful little controls.
                <br />A simpler everyday routine.
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

          <section
            className="editions-section"
            id="editions"
            aria-labelledby="editions-title"
          >
            <div className="container">
              <div className="section-heading-center">
                <p className="eyebrow">Find your fit</p>
                <h2 id="editions-title">Start simple. Make it your own.</h2>
                <p>
                  The same familiar app, with a little extra freedom in Pro.
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
                    A simple place to start saving your favorites.
                  </p>
                  <ul>
                    <li>Download single, selected, or all videos</li>
                    <li>Keep downloads together in one queue</li>
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
                      MORE WAYS TO MAKE IT YOURS
                    </span>
                    <span className="edition-symbol" aria-hidden="true">
                      ✳
                    </span>
                  </div>
                  <h3>YouMacro Pro</h3>
                  <p className="edition-description">
                    Everything in Lite, with more control over every download.
                  </p>
                  <ul>
                    <li>Set the number of parallel downloads</li>
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
                More parallel downloads can speed up batches. Actual speed
                depends on your connection and the source website.
              </p>
            </div>
          </section>

          <section
            className="section faq-section container"
            aria-labelledby="faq-title"
          >
            <div>
              <p className="eyebrow">A few good questions</p>
              <h2 id="faq-title">Before you get started.</h2>
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
                  Both editions include the browser, download queue, Lite
                  settings, keyboard shortcuts, and tutorials. Pro adds controls
                  for parallel downloads, your destination folder, audio-only
                  downloads, and available subtitles and translations.
                </p>
              </details>
              <details>
                <summary>
                  Can I download several videos at once?
                  <span aria-hidden="true">+</span>
                </summary>
                <p>
                  Yes. Use Download Selected for videos near selected text, or
                  Download All to find video links across the page. With Pro,
                  you can also set how many downloads run in parallel.
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
              <p className="eyebrow">Your next good find is out there</p>
              <h2>
                Bring it home
                <br />
                with YouMacro.
              </h2>
              <a className="button button-primary" href="#editions">
                Choose your edition <Arrow />
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
