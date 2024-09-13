import React from "react";
import Head from "next/head";
import "../styles/index.styles.js";
import { GlobalStyles } from "../styles/index.styles.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Modern Product Page</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
