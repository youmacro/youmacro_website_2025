import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { ShareButtons } from './Share';
import { Trust } from './Trust';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="site-shell">
    <Meta canonical="https://youmacro.com/" description={AppConfig.description} image={AppConfig.image} title={AppConfig.title} />
    <Hero />
    <main><VerticalFeatures /><Trust /><ShareButtons /><Banner /></main>
    <Footer />
  </div>
);

export { Base };
