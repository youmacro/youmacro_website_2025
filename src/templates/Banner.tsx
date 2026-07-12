import { StoreButton } from '../button/StoreButton';
import { DownloadIcon } from '../icons/DownloadIcon';

const Banner = () => (
  <section className="cta-section">
    <div className="site-container">
      <div className="cta-card">
        <div aria-hidden="true" className="cta-card__orb" />
        <div className="cta-card__copy">
          <span className="section-kicker section-kicker--dark">
            Available for Windows
          </span>
          <h2>Ready to make video downloads effortless?</h2>
          <p>
            Get YouMacro from Microsoft Store and start saving your favorite
            videos with a right-click.
          </p>
          <div className="cta-card__actions">
            <StoreButton />
            <span>No ads. No in-app purchases.</span>
          </div>
        </div>
        <div aria-hidden="true" className="cta-card__mark">
          <span className="cta-download-icon"><DownloadIcon /></span>
          <small>One click away</small>
        </div>
      </div>
    </div>
  </section>
);

export { Banner };
