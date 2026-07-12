import Image from "next/image";
import Link from "next/link";

import { StoreButton } from "../button/StoreButton";
import { DownloadIcon } from "../icons/DownloadIcon";
import { AppConfig } from "../utils/AppConfig";
import { Logo } from "./Logo";

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path
      d="m5 10.5 3.2 3.2L15.5 6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Hero = () => (
  <header className="hero-shell" id="top">
    <div aria-hidden="true" className="hero-orb hero-orb--one" />
    <div aria-hidden="true" className="hero-orb hero-orb--two" />
    <div className="site-container">
      <nav aria-label="Primary navigation" className="topbar">
        <Link aria-label="YouMacro home" href="#top">
          <Logo xl />
        </Link>
        <div className="topbar__links">
          <Link href="#how-it-works">How it works</Link>
          <Link href="#features">Features</Link>
          <Link href="#privacy">Privacy</Link>
        </div>
        <Link
          className="topbar__store"
          href={AppConfig.storeUrl}
          rel="noreferrer"
          target="_blank"
        >
          Get the app <span aria-hidden="true">&#8599;</span>
        </Link>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            Video downloader for Windows
          </div>
          <h1>
            Save videos from the web.
            <span>Right as you browse.</span>
          </h1>
          <p className="hero-copy__lead">
            Browse the web in YouMacro, then right-click to download one video,
            selected videos, or every video on the page. Queue hundreds at once
            and let the multithreaded engine run them in parallel.
          </p>

          <div className="hero-actions">
            <StoreButton />
            <Link className="text-button" href="#how-it-works">
              See how it works <span aria-hidden="true">&darr;</span>
            </Link>
          </div>
          <p className="hero-compatibility">
            <CheckIcon />
            Works across most social media and video-hosting sites.
          </p>
        </div>

        <div className="hero-visual">
          <div aria-hidden="true" className="hero-visual__halo" />
          <figure className="app-window">
            <div className="app-window__bar">
              <div aria-hidden="true" className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>YouMacro Browser</span>
              <div aria-hidden="true" className="window-controls">
                <span>-</span>
                <span>&#9633;</span>
                <span>&times;</span>
              </div>
            </div>
            <div className="app-window__image">
              <Image
                alt="YouMacro downloading every video detected on a page"
                height={1080}
                priority
                sizes="(max-width: 960px) 92vw, 52vw"
                src="/assets/images/youmacro/download_all_videos.png"
                width={1920}
              />
            </div>
          </figure>
          <div className="hero-visual__stats">
            <div className="floating-card floating-card--speed">
              <span className="floating-card__icon">
                <DownloadIcon />
              </span>
              <span>
                <small>Built for big queues</small>
                <strong>Hundreds in parallel</strong>
              </span>
            </div>
            <div className="floating-card floating-card--privacy">
              <span className="privacy-pulse" />
              <span>
                <small>Data collected</small>
                <strong>None</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div aria-label="YouMacro benefits" className="trust-strip">
        {[
          "No ads",
          "No in-app purchases",
          "No data collection",
          "Open source",
        ].map((item) => (
          <div className="trust-strip__item" key={item}>
            <CheckIcon />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </header>
);

export { Hero };
