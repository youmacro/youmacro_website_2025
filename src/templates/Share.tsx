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

import React, { useState, useEffect } from 'react';

const size = 64
const hashtag = "#videodownloader"
const hashtags = ['videodownloader','videodownload','download','video']
const shareUrl = 'https://apps.microsoft.com/detail/9nlwcwnh9whl';
const source = "https://youmacro.com"
const subject = "Check out this app called, YouMacro!"
const body = "Just wanted to share this awesome app called, \"YouMacro Video Downloader\".\n\n* I've been using it to download videos from the web.\n* Just right-click to download videos while you browse the web!\n* It's been amazing so far!"
const separator = "\n\n"
const image = "https://www.youmacro.com/assets/images/youmacro/download_all_videos.png"



function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

const EmailShare = () => {
    const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <EmailShareButton url={shareUrl} subject={subject} body={body} separator={separator}>
        <EmailIcon size={size} />
      </EmailShareButton>
    </div>
  );
}
const FacebookShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <FacebookShareButton url={shareUrl} hashtag={hashtag}>
        <FacebookIcon size={size} />
      </FacebookShareButton>
    </div>
  );
};
const FacebookMessengerShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <FacebookMessengerShareButton url={shareUrl} redirectUri={shareUrl} >
        <FacebookMessengerIcon size={size} />
      </FacebookMessengerShareButton>
    </div>
  );
};
const GabShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <GabShareButton url={shareUrl} hashtag={hashtag}>
        <GabIcon size={size} />
      </GabShareButton>
    </div>
  );
};
const HatenaShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <HatenaShareButton url={shareUrl} title={subject}>
        <HatenaIcon size={size} />
      </HatenaShareButton>
    </div>
  );
};
const InstapaperShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <InstapaperShareButton url={shareUrl} title={subject} description={body}>
        <InstapaperIcon size={size} />
      </InstapaperShareButton>
    </div>
  );
};
const LineShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <LineShareButton url={shareUrl} title={subject}>
        <LineIcon size={size} />
      </LineShareButton>
    </div>
  );
}
const LinkedinShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <LinkedinShareButton url={shareUrl} title={subject} summary={body} source={source}>
        <LinkedinIcon size={size} />
      </LinkedinShareButton>
    </div>
  );
};
const LivejournalShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <LivejournalShareButton url={shareUrl} title={subject} description={body} >
        <LivejournalIcon size={size} />
      </LivejournalShareButton>
    </div>
  );
};
const MailruShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <MailruShareButton url={shareUrl} title={subject} description={body} imageUrl={image}>
        <MailruIcon size={size} />
      </MailruShareButton>
    </div>
  );
};
const OKShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <OKShareButton url={shareUrl} title={subject} description={body} media={image}>
        <OKIcon size={size} />
      </OKShareButton>
    </div>
  );
};
const PinterestShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <PinterestShareButton url={shareUrl} media={image} description={body}>
        <PinterestIcon size={size} />
      </PinterestShareButton>
    </div>
  );
}
const PocketShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <PocketShareButton url={shareUrl} title={subject}>
        <PocketIcon size={size} />
      </PocketShareButton>
    </div>
  );
}
const RedditShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <RedditShareButton url={shareUrl} title={subject}>
        <RedditIcon size={size} />
      </RedditShareButton>
    </div>
  );
}
const TelegramShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <TelegramShareButton url={shareUrl} title={subject} >
        <TelegramIcon size={size} />
      </TelegramShareButton>
    </div>
  );
}
const TumblrShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <TumblrShareButton url={shareUrl} title={subject} caption={body} tags={hashtags}>
        <TumblrIcon size={size} />
      </TumblrShareButton>
    </div>
  );
}
const TwitterShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <TwitterShareButton url={shareUrl} title={subject} hashtags={hashtags}>
        <TwitterIcon size={size} />
      </TwitterShareButton>
    </div>
  );
}
const ViberShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <ViberShareButton url={shareUrl} title={subject} separator={separator}>
        <ViberIcon size={size} />
      </ViberShareButton>
    </div>
  );
}
const VKShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <VKShareButton url={shareUrl} title={subject} image={image}>
        <VKIcon size={size} />
      </VKShareButton>
    </div>
  );
}
const WeiboShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <WeiboShareButton url={shareUrl} title={subject} image={image}>
        <WeiboIcon size={size} />
      </WeiboShareButton>
    </div>
  );
}
const WhatsappShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
  return (
    <div>
      <WhatsappShareButton url={shareUrl} title={subject} separator={separator}>
        <WhatsappIcon size={size} />
      </WhatsappShareButton>
    </div>
  );
}
const WorkplaceShare = () => {
        const hasMounted = useHasMounted();
    if (!hasMounted) {
        return null;
    }
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

