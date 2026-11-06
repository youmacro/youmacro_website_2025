import styles from "./HeroVisual.module.css";

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18 18 6M6 6h12v12" />
    </svg>
  );
}

export default function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.modeLine}>
        <span>SINGLE</span>
        <span>SELECTED</span>
        <span>ALL VIDEOS</span>
      </div>
      <a
        className={styles.browserCard}
        href="#features"
        aria-label="Explore YouMacro's browser and download controls"
      >
        <div className={styles.cardTopline}>
          <span>
            <img src="/media/app-icon.png" alt="" width="25" height="25" /> Your
            browser. Your download button.
          </span>
          <Arrow />
        </div>
        <img
          className={styles.screenshot}
          src="/media/screenshots/01-browser-menu.png"
          width="1600"
          height="900"
          alt="YouMacro's built-in browser with Download This Link, Download All and Download Selected options on a demonstration media library."
        />
        <div className={styles.browserCaption}>
          <span>One right-click. Three ways to download.</span>
          <small>Actual app · Demonstration media</small>
        </div>
      </a>
      <div className={styles.bottomRow}>
        <div className={styles.capacityCard}>
          <span className={styles.capacityEyebrow}>UP TO</span>
          <strong>999</strong>
          <span className={styles.capacityLabel}>
            simultaneous
            <br />
            downloads
            <br />
            across different sites
          </span>
          <span className={styles.proLabel}>with YouMacro Pro</span>
        </div>
        <a
          className={styles.queueCard}
          href="#features"
          aria-label="Explore YouMacro's download queue"
        >
          <div className={styles.queueTopline}>
            <span>Your download queue</span>
            <Arrow />
          </div>
          <img
            className={styles.screenshot}
            src="/media/screenshots/04-downloads-controls.png"
            width="1600"
            height="900"
            alt="YouMacro's download queue with illustrative sample jobs and progress."
          />
          <p>Pause. Resume. Keep it organized.</p>
        </a>
      </div>
      <p className={styles.capacityNote}>
        If all 999 downloads come from the same domain, that website will likely
        throttle them. Actual concurrency depends on your PC, connection, and
        sites.
      </p>
    </div>
  );
}
