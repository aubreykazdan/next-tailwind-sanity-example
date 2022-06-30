import Head from "next/head";

export default function Meta({ page, settings }) {
  const { description, ogImage } = page;
  const { websiteTitle } = settings;
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/public/favicon.ico" />
      <meta name="description" content={description} key="ogdesc" />
      <meta property="og:title" content={websiteTitle} key="ogtitle" />
      <meta property="og:image" content={ogImage.asset.url} key="ogimage" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bureau1024" />
      <title>{websiteTitle}</title>
    </Head>
  );
}
