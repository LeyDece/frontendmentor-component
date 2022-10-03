import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          charSet="UTF-8"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />

        <title>Frontend Mentor | QR code component</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
