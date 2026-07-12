import Image from 'next/image';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';

const steps = [
  {
    number: '01',
    title: 'Browse',
    description: 'Open a page in YouMacro and find the video you want.',
    image: '/assets/images/youmacro/how-it-works/step-browse.png',
    imageAlt: 'Browsing a page of video thumbnails in YouMacro',
  },
  {
    number: '02',
    title: 'Right-click',
    description: 'Right-click over a video thumbnail, the page, or a selection of videos.',
    image: '/assets/images/youmacro/how-it-works/step-right-click.png',
    imageAlt: 'Right-clicking over a video thumbnail',
  },
  {
    number: '03',
    title: 'Choose download method',
    description: 'Download one video, selected videos, or every video on the page.',
    image: '/assets/images/youmacro/how-it-works/step-choose-download.png',
    imageAlt: 'Choosing how videos should be downloaded',
  },
  {
    number: '04',
    title: 'Continue browsing',
    description: 'YouMacro downloads videos in the background while you keep browsing.',
    image: '/assets/images/youmacro/how-it-works/step-continue-browsing.png',
    imageAlt: 'Continuing to browse while downloads run in the background',
  },
];

const features = [
  {
    index: '01',
    category: 'One video',
    title: 'Save one video in a right-click.',
    description:
      'Open the context menu and choose Download_This - or use the toolbar - to download a single video without leaving the page.',
    command: 'Download_This',
    highlights: [
      'Context menu or toolbar',
      'Stay on the page while you download',
    ],
    poster: '/assets/images/youmacro/download_single_videos.png',
    iframeSrc:
      'https://drive.google.com/file/d/1sAPr0o1sv1Xrk-8LBoLto6sgGUZPyTiG/preview',
  },
  {
    index: '02',
    category: 'Whole page',
    title: 'Capture every video on the page.',
    description:
      'Right-click and choose Download_All, or use the toolbar, to queue every detected video at once.',
    command: 'Download_All',
    highlights: [
      'Download the complete page',
      'One action starts the full queue',
    ],
    poster: '/assets/images/youmacro/download_all_videos.png',
    iframeSrc:
      'https://drive.google.com/file/d/1P6B3TU4x_-zQx2lM_ahsOq96q3F_J2kv/preview',
    reverse: true,
  },

  {
    index: '03',
    category: 'Your selection',
    title: 'Download only what matters.',
    description:
      'Highlight the text associated with the videos you want, right-click, and choose Download_Selected. YouMacro downloads the videos near your selection.',
    command: 'Download_Selected',
    highlights: [
      'Target videos near selected text',
      'Skip everything else on the page',
    ],
    poster: '/assets/images/youmacro/download_selected_videos.png',
    iframeSrc:
      'https://drive.google.com/file/d/1m7FycQ2zI35Gj50fP2PzZiNU4S1EfPGy/preview',
  },
  {
    index: '04',
    category: 'Parallel engine',
    title: 'Hundreds of downloads. Running together.',
    description:
      'YouMacro is multithreaded, so videos download in parallel for faster overall completion. If a download thread stalls, YouMacro detects it and retries automatically.',
    highlights: [
      'Hundreds of parallel downloads',
      'Automatic stalled-thread detection and retry',
    ],
    poster: '/assets/images/youmacro/parallel_downloads.png',
    iframeSrc:
      'https://drive.google.com/file/d/1AUhDCGR1MKjUahmkzKjGkdx3aUH4Aak5/preview',
    reverse: true,
  },
  {
    index: '05',
    category: 'Your settings',
    title: 'Make every download yours.',
    description:
      'Choose the exact video resolution and audio settings, save audio only when that is all you need, and select your local download directory.',
    highlights: [
      'Exact video resolution',
      'Audio-only downloads',
      'Custom local folder',
    ],
    poster: '/assets/images/youmacro/change_settings.png',
    iframeSrc:
      'https://drive.google.com/file/d/1yVM8Yg3xA8PVCdVfASV5Cx4hZEpVTogz/preview',
  },

  {
    index: '06',
    category: 'Your library',
    title: 'Find every download in one place.',
    description:
      'Open your downloaded videos anytime with the View_Downloads button in the toolbar.',
    command: 'View_Downloads',
    highlights: [
      'One-click access from the toolbar',
      'A clear path to your saved files',
    ],
    poster: '/assets/images/youmacro/view_downloads.png',
    iframeSrc:
      'https://drive.google.com/file/d/1oYQ5EIfLKFGPoJ4RH431XF3KR--dmsKf/preview',
    reverse: true,
  },
  {
    index: '07',
    category: 'Windows theme',
    title: 'At home in light or dark mode.',
    description:
      'When dark mode is enabled on your Windows desktop, YouMacro automatically adjusts its colors to match your system color scheme.',
    highlights: [
      'Follows your desktop theme',
      'Comfortable in light and dark environments',
    ],
    poster: '/assets/images/youmacro/dark_mode.png',
    iframeSrc:
      'https://drive.google.com/file/d/1QEjBlNVDuKuGQ6zUOOoe_hwx3vHUyvBK/preview',
  },
];

const VerticalFeatures = () => (
  <>
    <section className="workflow-section" id="how-it-works">
      <div className="site-container">
        <div className="section-heading section-heading--centered">
          <span className="section-kicker">Simple by design</span>
          <h2>From browsing to downloading in four simple steps.</h2>
          <p>
            Find a video, right-click its thumbnail, choose how you want it,
            and keep browsing while YouMacro handles the download.
          </p>
        </div>

        <div className="workflow-grid">
          {steps.map((step, stepIndex) => (
            <div className="workflow-step" key={step.number}>
              <div className="workflow-step__image">
                <Image
                  alt={step.imageAlt}
                  height={1024}
                  sizes="(max-width: 760px) 90vw, (max-width: 1020px) 44vw, 24vw"
                  src={step.image}
                  width={1536}
                />
              </div>
              <div className="workflow-step__top">
                <span>{step.number}</span>
                {stepIndex < steps.length - 1 && (
                  <span aria-hidden="true">&rarr;</span>
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="compatibility-callout">
          <span aria-hidden="true" className="compatibility-callout__icon">
            &#9678;
          </span>
          <p>
            <strong>Made for the sites you already use.</strong>
            YouMacro can download almost any video from most social media and
            video-hosting websites.
          </p>
        </div>
      </div>
    </section>

    <section className="features-section" id="features">
      <div className="site-container">
        <div className="section-heading">
          <span className="section-kicker">Everything you need</span>
          <h2>From a single clip to a full queue.</h2>
          <p>
            Seven focused tools give you control over what you save, how
            quickly it downloads, and where it goes.
          </p>
        </div>
        <div className="features-list">
          {features.map((feature) => (
            <VerticalFeatureRow key={feature.index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export { VerticalFeatures };
