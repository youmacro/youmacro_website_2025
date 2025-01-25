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
} from "next-share";

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
      <MailruShareButton url={shareUrl} title={subject} description={body} media={image}>
        <MailruIcon size={size} />
      </MailruShareButton>
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



export {EmailShare, FacebookShare, FacebookMessengerShare, GabShare, HatenaShare, InstapaperShare, LineShare, LinkedinShare,
    LivejournalShare, MailruShare, OKShare, PinterestShare, PocketShare, RedditShare, TelegramShare, TumblrShare,
    TwitterShare, ViberShare, VKShare, WeiboShare, WhatsappShare, WorkplaceShare};

