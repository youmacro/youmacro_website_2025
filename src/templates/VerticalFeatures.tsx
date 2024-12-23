import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Try it once and you won't go back"
    description="Download videos directly from the web page. Download selected videos or all videos."
  >
    <VerticalFeatureRow
      title="Download single videos"
      description="Download single videos by using the right click menu and choosing the Download_This. Alternatively use the toolbar."
      image="/assets/images/youmacro/download_single_videos.png"
      imageAlt="First feature alt text"
      youtubeid="asLQyp3xYnM?si=21bahxZnmmAyAGnZ"
    />
    <VerticalFeatureRow
      title="Download all videos"
      description="Download all videos by using the right click and choose Download_All. Alternatively use the toolbar."
      image="/assets/images/youmacro/download_all_videos.png"
      imageAlt="Second feature alt text"
      youtubeid="XnXYOCtam18?si=iXWneXd-P3GPSmR6"
      reverse
    />
    <VerticalFeatureRow
      title="Download selected videos"
      description="Select the text associated with the videos you want. Then use the right click menu and choose Download_Selected."
      image="/assets/images/youmacro/download_selected_videos.png"
      imageAlt="Third feature alt text"
      youtubeid="YiZqqn74hpk?si=1q4dnxQA2nNue5Tz"
    />
    <VerticalFeatureRow
      title="Download videos in parallel"
      description="All downloads happen in parallel, speeding up overall download times."
      image="/assets/images/youmacro/parallel_downloads.png"
      imageAlt="Fourth feature alt text"
      youtubeid="4aXeJNQAN4Q?si=ebLnBmc4bDCMKd4i"
      reverse
    />
    <VerticalFeatureRow
      title="Customize video and audio settings"
      description="Choose the exact video and audio settings you want. You can download just the audio as well."
      image="/assets/images/youmacro/change_settings.png"
      imageAlt="Fourth feature alt text"
      youtubeid="44cprCqYQpo?si=TXoM6LTV-EZoK-Ri"
    />
    <VerticalFeatureRow
      title="View your downloaded videos"
      description="View your downloaded videos by pressing the View_Downloads button in the toolabr."
      image="/assets/images/youmacro/view_downloads.png"
      imageAlt="Fourth feature alt text"
      youtubeid="KYYx7oL3CtE?si=VuvcUZe1fwO6CDUU"
      reverse
    />
    <VerticalFeatureRow
      title="Dark mode enabled"
      description="If you have dark mode enabled on your desktop, YouMacro will change colors to fit your color scheme."
      image="/assets/images/youmacro/dark_mode.png"
      imageAlt="Fourth feature alt text"
      youtubeid="hdHdWdj27Fw?si=qIblazVZqO_soQf3"
    />
  </Section>
);

export { VerticalFeatures };
