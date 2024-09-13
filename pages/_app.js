import React from "react";
import Head from "next/head";
import "../styles/index.styles.js";
import { GlobalStyles } from "../styles/index.styles.js";
import Navbar from "../src/app/components/NavBar.js";
import { CartProvider } from "../src/app/services/cartContext.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <Head>
          <title>MySide Test</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <meta property="og:image" content="https://i.imgur.com/Ckemqk3.png" />
        </Head>
        <GlobalStyles />
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
