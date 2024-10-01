import "../styles/globals.scss";

import { ApolloProvider } from "@apollo/client";
import AOS from "aos";
import { client } from "lib/apollo";
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import React, { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  return (
    <>
      <Head>
         <title>F.A.M.E</title>
        <meta name="viewport" content="width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG}`}
        strategy="afterInteractive"
       />
       <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.G_TAG}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
