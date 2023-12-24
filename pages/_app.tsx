import "styles/globals.css";
import "styles/prism.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import LayoutWrapper from "components/layout/LayoutWrapper";
import { siteMetadata } from "utils/constant";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
