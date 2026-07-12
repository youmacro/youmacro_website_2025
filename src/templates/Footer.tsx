import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-container">
      <div className="site-footer__main">
        <Link aria-label="Back to the top" href="#top"><Logo /></Link>
        <nav aria-label="Footer navigation" className="site-footer__links">
          <Link href="#how-it-works">How it works</Link>
          <Link href="#features">Features</Link>
          <Link href="#privacy">Privacy</Link>
          <Link href="#share">Share</Link>
          <Link href={AppConfig.storeUrl} rel="noreferrer" target="_blank">
            Microsoft Store
          </Link>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} YouMacro Video Downloader.
          All rights reserved.
        </p>
        <p>Only download content you have permission to save.</p>
      </div>
    </div>
  </footer>
);

export { Footer };
