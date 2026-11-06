import Document, { Head, Html, Main, NextScript } from "next/document";

import { AppConfig } from "../utils/AppConfig";
import { THEME_INIT_SCRIPT } from "../utils/theme";

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale} suppressHydrationWarning>
        <Head>
          <script
            id="theme-init"
            dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
