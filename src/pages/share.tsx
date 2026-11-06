import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import ThemeToggle from "../components/ThemeToggle";

const WEBSITE_URL = "https://youmacro.com/";
const LITE_STORE_URL = "https://apps.microsoft.com/detail/9NLWCWNH9WHL";
const PRO_STORE_URL = "https://apps.microsoft.com/detail/9P2V0G3P86BD";

export default function SharePage() {
  const [canShare, setCanShare] = useState(false);
  const [pendingAction, setPendingAction] = useState<"copy" | "share" | null>(
    null,
  );
  const [message, setMessage] = useState("");
  const linkInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCanShare(typeof navigator.share === "function");
  }, []);

  async function copyLink() {
    setPendingAction("copy");
    setMessage("");

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard access is unavailable.");
      }
      await navigator.clipboard.writeText(WEBSITE_URL);
      setMessage("Link copied. Ready to share!");
    } catch {
      linkInput.current?.focus();
      linkInput.current?.select();
      setMessage(
        "Copy did not work here. The link is selected so you can copy it manually.",
      );
    } finally {
      setPendingAction(null);
    }
  }

  async function shareLink() {
    setPendingAction("share");
    setMessage("");

    try {
      await navigator.share({
        title: "YouMacro — Video Downloader for Windows",
        text: "Download single videos, your selection, or whole-page batches with YouMacro for Windows.",
        url: WEBSITE_URL,
      });
      setMessage("Shared. Thanks for spreading the word!");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        setMessage("Sharing canceled. You can still copy the link.");
      } else {
        setMessage("Sharing did not open. Use Copy link to share it yourself.");
      }
    } finally {
      setPendingAction(null);
    }
  }

  return (
    <div className="share-page">
      <Head>
        <title>Share YouMacro | Video Downloader for Windows</title>
        <meta
          name="description"
          content="Share YouMacro with a friend. Copy the website link or open your device's share options to pass along this video downloader for Windows."
        />
        <link rel="canonical" href="https://youmacro.com/share/" />
      </Head>

      <header className="site-header container">
        <Link className="brand" href="/" aria-label="YouMacro home">
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
        </Link>
        <div className="header-actions">
          <nav aria-label="Main navigation">
            <Link className="text-link" href="/">
              ← Back to site
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="container">
        <section className="share-panel" aria-labelledby="share-title">
          <p className="eyebrow">Good finds are better shared</p>
          <h1 id="share-title">Pass it on.</h1>
          <p>
            Know someone saving videos one by one? Share YouMacro for single,
            selected, and whole-page batch downloads.
          </p>

          <label htmlFor="youmacro-link">Website link</label>
          <input
            ref={linkInput}
            id="youmacro-link"
            type="url"
            value={WEBSITE_URL}
            readOnly
            onFocus={(event) => event.currentTarget.select()}
            spellCheck={false}
          />
          <div className="share-actions">
            <button
              className="button button-primary"
              type="button"
              disabled={pendingAction !== null}
              onClick={copyLink}
            >
              {pendingAction === "copy" ? "Copying…" : "Copy link"}
            </button>
            {canShare && (
              <button
                className="button button-secondary"
                type="button"
                disabled={pendingAction !== null}
                onClick={shareLink}
              >
                {pendingAction === "share" ? "Opening…" : "Share options"}
              </button>
            )}
          </div>
          <p
            className="share-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {message}
          </p>
          <footer className="share-footer-links">
            <Link className="text-link" href="/">
              Explore YouMacro
            </Link>
            <a className="text-link" href={LITE_STORE_URL}>
              Get Lite
            </a>
            <a className="text-link" href={PRO_STORE_URL}>
              Get Pro
            </a>
          </footer>
        </section>
      </main>
    </div>
  );
}
