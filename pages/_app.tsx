import type { AppProps } from "next/app";
import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <title>Get Future</title>
      <meta name="theme-color" content="#1e1d80" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        <script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
