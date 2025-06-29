import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Try it once and you won't go back"
    description="Download videos by right-clicking as you browse the web. Download some or all videos on the page."
  >
    <VerticalFeatureRow
      title="Download single videos"
      description="Download single videos by using the right click menu and choosing the Download_This. Alternatively use the toolbar."
      poster="/assets/images/youmacro/download_single_videos.png"
      video="/assets/videos/download_single_videos.mp4"
      // youtubeid="asLQyp3xYnM?si=21bahxZnmmAyAGnZ"
    />
    <VerticalFeatureRow
      title="Download all videos"
      description="Download all videos by using the right click and choose Download_All. Alternatively use the toolbar."
      poster="/assets/images/youmacro/download_all_videos.png"
      video="/assets/videos/download_all_videos.mp4"
      // youtubeid="XnXYOCtam18?si=iXWneXd-P3GPSmR6"
      reverse
    />
    <VerticalFeatureRow
      title="Download selected videos"
      description="Select the text associated with the videos you want. Then use the right click menu and choose Download_Selected."
      poster="/assets/images/youmacro/download_selected_videos.png"
      video="/assets/videos/download_selected_videos.mp4"
      // youtubeid="YiZqqn74hpk?si=1q4dnxQA2nNue5Tz"
    />
    <VerticalFeatureRow
      title="Download videos in parallel"
      description="All downloads happen in parallel, speeding up overall download times."
      poster="/assets/images/youmacro/parallel_downloads.png"
      video="/assets/videos/parallel_downloads.mp4"
      // youtubeid="4aXeJNQAN4Q?si=ebLnBmc4bDCMKd4i"
      reverse
    />
    <VerticalFeatureRow
      title="Customize video and audio settings"
      description="Choose the exact video and audio settings you want. You can download just the audio as well."
      poster="/assets/images/youmacro/change_settings.png"
      video="/assets/videos/change_settings.mp4"
      // youtubeid="44cprCqYQpo?si=TXoM6LTV-EZoK-Ri"
    />
    <VerticalFeatureRow
      title="View your downloaded videos"
      description="View your downloaded videos by pressing the View_Downloads button in the toolabr."
      poster="/assets/images/youmacro/view_downloads.png"
      video="/assets/videos/view_downloads.mp4"
      // youtubeid="KYYx7oL3CtE?si=VuvcUZe1fwO6CDUU"
      reverse
    />
    <VerticalFeatureRow
      title="Dark mode enabled"
      description="If you have dark mode enabled on your desktop, YouMacro will change colors to fit your color scheme."
      poster="/assets/images/youmacro/dark_mode.png"
      video="/assets/videos/dark_mode.mp4"
      // youtubeid="hdHdWdj27Fw?si=qIblazVZqO_soQf3"
    />
  </Section>
);

export { VerticalFeatures };
