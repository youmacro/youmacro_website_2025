import Link from 'next/link';

import { AppConfig } from '../utils/AppConfig';

const ShieldIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 32 32">
    <path
      d="M16 3 27 7v7.8c0 6.7-4.4 11.8-11 14.2C9.4 26.6 5 21.5 5 14.8V7l11-4Z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="m11.5 16 3 3 6.5-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

const Trust = () => (
  <section className="privacy-section" id="privacy">
    <div className="site-container privacy-grid">
      <div className="privacy-copy">
        <span className="section-kicker section-kicker--dark">
          Privacy first
        </span>
        <h2>Powerful downloads. Private by design.</h2>
        <p>
          YouMacro makes safety and privacy a priority. It does not collect any
          information, and there are no ads or in-app purchases competing for
          your attention.
        </p>
        <Link
          className="privacy-link"
          href={AppConfig.privacyUrl}
          rel="noreferrer"
          target="_blank"
        >
          Read the privacy policy <span aria-hidden="true">&#8599;</span>
        </Link>
      </div>

      <div className="privacy-panel">
        <div className="privacy-panel__heading">
          <span className="privacy-panel__icon"><ShieldIcon /></span>
          <span>
            <small>Your privacy status</small>
            <strong>Protected by default</strong>
          </span>
        </div>
        <dl className="privacy-facts">
          <div>
            <dt>Information collected</dt>
            <dd><span />None</dd>
          </div>
          <div>
            <dt>Ads</dt>
            <dd><span />None</dd>
          </div>
          <div>
            <dt>In-app purchases</dt>
            <dd><span />None</dd>
          </div>
          <div>
            <dt>Source</dt>
            <dd><span />Open source on GitHub</dd>
          </div>
          <div>
            <dt>Download location</dt>
            <dd><span />Your chosen local folder</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
);

export { Trust };
