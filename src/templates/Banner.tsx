import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { Background } from '../background/Background';



const Banner = () => (
  <Background color="bg-gray-100">

          <Section yPadding="pt-00 pb-10">
            <CTABanner
              title="Start downloading your favorite videos."
              subtitle="It's only one click away."
              button={
                <Link target="_blank" href="https://apps.microsoft.com/detail/9NLWCWNH9WHL?rtc=1&hl=en-us&gl=US">
                  <Button>Microsoft Store Reviews</Button>
                </Link>
              }
            />
          </Section>

          <Section yPadding="pt-00 pb-20">
            <script type="module" src="https://get.microsoft.com/badge/ms-store-badge.bundled.js" async></script>
              <div>
                <ms-store-badge
                  productid="9NLWCWNH9WHL"
                  theme="auto"
                  language="en-US"
                  animation="on">
                </ms-store-badge>
              </div>
          </Section>

  </Background>
);

export { Banner };
