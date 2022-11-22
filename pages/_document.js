import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="ar-SY">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;700&family=Blaka+Ink&display=swap" rel="stylesheet"/>
        <link rel="apple-touch-icon" href="/favicon.png"/>
        <link rel="icon" href="/favicon.png"/>
        <meta charSet="utf-8"/>
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}
