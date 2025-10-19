import type { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    {/* Google tag (gtag.js) */}
    <Script
      strategy="afterInteractive"
      src="https://www.googletagmanager.com/gtag/js?id=G-XDS0CF3W2R"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XDS0CF3W2R');
      `}
    </Script>
    <Component {...pageProps} />
  </>
);

export default MyApp;
