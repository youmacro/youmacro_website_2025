import Link from 'next/link';

import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    GabIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
    XIcon,

    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    GabShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WeiboShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
} from "react-share";

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';


const size = 64
const hashtag = "#videodownloader"
const hashtags = ['videodownloader','videodownload','download','video']
const shareUrl = 'https://apps.microsoft.com/detail/9nlwcwnh9whl';
const source = "https://youmacro.com"
const subject = "Check out this app called, YouMacro!"
const body = "Just wanted to share this awesome app called, \"YouMacro Video Downloader\".\n\n* I've been using it to download videos from the web.\n* Just right-click to download videos while you browse the web!\n* It's been amazing so far!"
const separator = "\n\n"
const image = "https://www.youmacro.com/assets/images/youmacro/download_all_videos.png"



const EmailShare = () => {
  return (
    <div>
      <EmailShareButton url={shareUrl} subject={subject} body={body} separator={separator}>
        <EmailIcon size={size} />
      </EmailShareButton>
    </div>
  );
}
const FacebookShare = () => {
  return (
    <div>
      <FacebookShareButton url={shareUrl} hashtag={hashtag}>
        <FacebookIcon size={size} />
      </FacebookShareButton>
    </div>
  );
};
const FacebookMessengerShare = () => {
  return (
    <div>
      <FacebookMessengerShareButton url={shareUrl} redirectUri={shareUrl} >
        <FacebookMessengerIcon size={size} />
      </FacebookMessengerShareButton>
    </div>
  );
};
const GabShare = () => {
  return (
    <div>
      <GabShareButton url={shareUrl} hashtag={hashtag}>
        <GabIcon size={size} />
      </GabShareButton>
    </div>
  );
};
const HatenaShare = () => {
  return (
    <div>
      <HatenaShareButton url={shareUrl} title={subject}>
        <HatenaIcon size={size} />
      </HatenaShareButton>
    </div>
  );
};
const InstapaperShare = () => {
  return (
    <div>
      <InstapaperShareButton url={shareUrl} title={subject} description={body}>
        <InstapaperIcon size={size} />
      </InstapaperShareButton>
    </div>
  );
};
const LineShare = () => {
  return (
    <div>
      <LineShareButton url={shareUrl} title={subject}>
        <LineIcon size={size} />
      </LineShareButton>
    </div>
  );
}
const LinkedinShare = () => {
  return (
    <div>
      <LinkedinShareButton url={shareUrl} title={subject} summary={body} source={source}>
        <LinkedinIcon size={size} />
      </LinkedinShareButton>
    </div>
  );
};
const LivejournalShare = () => {
  return (
    <div>
      <LivejournalShareButton url={shareUrl} title={subject} description={body} >
        <LivejournalIcon size={size} />
      </LivejournalShareButton>
    </div>
  );
};
const MailruShare = () => {
  return (
    <div>
      <MailruShareButton url={shareUrl} title={subject} description={body} imageUrl={image}>
        <MailruIcon size={size} />
      </MailruShareButton>
    </div>
  );
};
const OKShare = () => {
  return (
    <div>
      <OKShareButton url={shareUrl} title={subject} description={body} media={image}>
        <OKIcon size={size} />
      </OKShareButton>
    </div>
  );
};
const PinterestShare = () => {
  return (
    <div>
      <PinterestShareButton url={shareUrl} media={image} description={body}>
        <PinterestIcon size={size} />
      </PinterestShareButton>
    </div>
  );
}
const PocketShare = () => {
  return (
    <div>
      <PocketShareButton url={shareUrl} title={subject}>
        <PocketIcon size={size} />
      </PocketShareButton>
    </div>
  );
}
const RedditShare = () => {
  return (
    <div>
      <RedditShareButton url={shareUrl} title={subject}>
        <RedditIcon size={size} />
      </RedditShareButton>
    </div>
  );
}
const TelegramShare = () => {
  return (
    <div>
      <TelegramShareButton url={shareUrl} title={subject} >
        <TelegramIcon size={size} />
      </TelegramShareButton>
    </div>
  );
}
const TumblrShare = () => {
  return (
    <div>
      <TumblrShareButton url={shareUrl} title={subject} caption={body} tags={hashtags}>
        <TumblrIcon size={size} />
      </TumblrShareButton>
    </div>
  );
}
const TwitterShare = () => {
  return (
    <div>
      <TwitterShareButton url={shareUrl} title={subject} hashtags={hashtags}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
    </div>
  );
}
const ViberShare = () => {
  return (
    <div>
      <ViberShareButton url={shareUrl} title={subject} separator={separator}>
        <ViberIcon size={size} />
      </ViberShareButton>
    </div>
  );
}
const VKShare = () => {
  return (
    <div>
      <VKShareButton url={shareUrl} title={subject} image={image}>
        <VKIcon size={size} />
      </VKShareButton>
    </div>
  );
}
const WeiboShare = () => {
  return (
    <div>
      <WeiboShareButton url={shareUrl} title={subject} image={image}>
        <WeiboIcon size={size} />
      </WeiboShareButton>
    </div>
  );
}
const WhatsappShare = () => {
  return (
    <div>
      <WhatsappShareButton url={shareUrl} title={subject} separator={separator}>
        <WhatsappIcon size={size} />
      </WhatsappShareButton>
    </div>
  );
}
const WorkplaceShare = () => {
  return (
    <div>
      <WorkplaceShareButton url={shareUrl} quote={subject} hashtag={hashtag}>
        <WorkplaceIcon size={size} />
      </WorkplaceShareButton>
    </div>
  );
}




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
        <div>
          <FacebookShare/> <RedditShare/> <TwitterShare/> <LinkedinShare/> <TumblrShare/> <PinterestShare/>
          <WorkplaceShare/> <TelegramShare/> <WhatsappShare/> <LineShare/> <FacebookMessengerShare/>
          <WeiboShare/> <VKShare/> <ViberShare/> <PocketShare/> <OKShare/> <MailruShare/>
          <LivejournalShare/> <InstapaperShare/> <HatenaShare/> <GabShare/> <EmailShare/>
        </div>
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

export {EmailShare, FacebookShare, FacebookMessengerShare, GabShare, HatenaShare, InstapaperShare, LineShare, LinkedinShare,
    LivejournalShare, MailruShare, OKShare, PinterestShare, PocketShare, RedditShare, TelegramShare, TumblrShare,
    TwitterShare, ViberShare, VKShare, WeiboShare, WhatsappShare, WorkplaceShare};
