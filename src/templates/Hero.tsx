import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

import { ShareButtons } from './Share';




const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/*<li>
          <Link href="https://youmacro.com">
            GitHub
          </Link>
        </li>
        */}
        <li>
          <Link target="_blank" href="https://apps.microsoft.com/detail/9NLWCWNH9WHL?rtc=1&hl=en-us&gl=US">Microsoft Store</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-0 pb-5">
      <HeroOneButton
        title={
          <>
            {/* {'YouMacro\n'} */}
            <span className="text-default-500">YouMacro</span>
            <br/>
            <span className="text-pink-500">Video Downloader</span>
          </>
        }
        description="Download select videos or all videos from a web page."
        button={
          <Link target="_blank" href="https://apps.microsoft.com/detail/9NLWCWNH9WHL?rtc=1&hl=en-us&gl=US">
            <Button xl>Microsoft Store Reviews</Button>
          </Link>
        }
      />
    </Section>

    <Section yPadding="pt-00 pb-5">
        <div align="center">
        <script type="module" src="https://get.microsoft.com/badge/ms-store-badge.bundled.js" async></script>
        <ms-store-badge
          productid="9NLWCWNH9WHL"
          theme="auto"
          language="en-US"
          animation="on">
        </ms-store-badge>
        </div>
    </Section>

    <Section yPadding="pt-0 pb-5">
        <ShareButtons/>
    </Section>

    <Section yPadding="pt-00 pb-10">
        <h1 align="center">Help us grow YouMacro by sharing us with your network.</h1>
        <h1 align="center">The more users we have, the more resources we can allocate.</h1>
        <h1 align="center">Just click on one of the buttons above to get started.</h1>
    </Section>




    {/*
      <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <iframe
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/vmZa8sd-i4Y?si=G3e8malKX9yE7-1x"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
          </iframe>
      </div>
    */}
  </Background>
);

export { Hero };


