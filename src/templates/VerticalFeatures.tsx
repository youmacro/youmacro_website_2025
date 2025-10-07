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
      iframeSrc="https://drive.google.com/file/d/1sAPr0o1sv1Xrk-8LBoLto6sgGUZPyTiG/preview"
    />
    <VerticalFeatureRow
      title="Download all videos"
      description="Download all videos by using the right click and choose Download_All. Alternatively use the toolbar."
      poster="/assets/images/youmacro/download_all_videos.png"
      iframeSrc="https://drive.google.com/file/d/1P6B3TU4x_-zQx2lM_ahsOq96q3F_J2kv/preview"
      reverse
    />
    <VerticalFeatureRow
      title="Download selected videos"
      description="Select the text associated with the videos you want. Then use the right click menu and choose Download_Selected."
      poster="/assets/images/youmacro/download_selected_videos.png"
      iframeSrc="https://drive.google.com/file/d/1m7FycQ2zI35Gj50fP2PzZiNU4S1EfPGy/preview"
    />
    <VerticalFeatureRow
      title="Download videos in parallel"
      description="All downloads happen in parallel, speeding up overall download times."
      poster="/assets/images/youmacro/parallel_downloads.png"
      iframeSrc="https://drive.google.com/file/d/1AUhDCGR1MKjUahmkzKjGkdx3aUH4Aak5/preview"
      reverse
    />
    <VerticalFeatureRow
      title="Customize video and audio settings"
      description="Choose the exact video and audio settings you want. You can download just the audio as well."
      poster="/assets/images/youmacro/change_settings.png"
      iframeSrc="https://drive.google.com/file/d/1yVM8Yg3xA8PVCdVfASV5Cx4hZEpVTogz/preview"
    />
    <VerticalFeatureRow
      title="View your downloaded videos"
      description="View your downloaded videos by pressing the View_Downloads button in the toolabr."
      poster="/assets/images/youmacro/view_downloads.png"
      iframeSrc="https://drive.google.com/file/d/1oYQ5EIfLKFGPoJ4RH431XF3KR--dmsKf/preview"
      reverse
    />
    <VerticalFeatureRow
      title="Dark mode enabled"
      description="If you have dark mode enabled on your desktop, YouMacro will change colors to fit your color scheme."
      poster="/assets/images/youmacro/dark_mode.png"
      iframeSrc="https://drive.google.com/file/d/1QEjBlNVDuKuGQ6zUOOoe_hwx3vHUyvBK/preview"
    />
  </Section>
);

export { VerticalFeatures };
