import '../styles/tailwind.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const title = 'Melody Chuang Coaching';
  const description =
    'I help women rewire their brains and nervous systems to free themselves from the shackles of social conditioning and get the results they want in life.';
  const url = String(process.env.NEXT_PUBLIC_WEB_URL);

  return (
    <div>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${url}/meta.jpg`} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
