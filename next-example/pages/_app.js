import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  const { siteSettings, siteLogo, mainNav, socials } = pageProps;
  return (
    <Layout mainNav={mainNav}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
