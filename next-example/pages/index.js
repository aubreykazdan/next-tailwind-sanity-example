import { getClient } from "../lib/sanity.server";
import { homeQuery, mainNavQuery, siteSettingsQuery } from "../lib/queries";
import Meta from "../components/meta";
import Text from "../components/sections/twi";
import Hero from "../components/sections/hero";
import EventsList from "../components/sections/eventsList";
import CallToAction from "../components/sections/cta";
import Logo from "../components/logo";
import Specifications from "../components/sections/specs";
import Header from "../components/sections/header";

export default function Home({ page, settings, mainNav }) {
  const { pageBuilder } = page;
  return (
    <div>
      <Header mainNav={mainNav} />
      <Meta page={page} settings={settings} />
      {/* <Logo settings={settings} /> */}
      {pageBuilder
        ? pageBuilder.map((section) => {
            let el = null;
            const {
              _key,
              _type,
              heading,
              subtitle,
              image,
              alt,
              imageGallery,
              video,
              cards,
              specs,
              content,
              events,
              tagline,
              external,
              internal,
            } = section;
            console.log(section);

            switch (_type) {
              case "hero":
                el = (
                  <Hero
                    key={_key}
                    heading={heading}
                    tagline={tagline}
                    content={content}
                    images={imageGallery}
                    video={video}
                  />
                );
                break;
              case "textWithIllustration":
                el = (
                  <Text
                    key={_key}
                    heading={heading}
                    content={content}
                    tagline={tagline}
                    image={image}
                    alt={alt}
                  />
                );
                break;
              case "eventsList":
                el = (
                  <EventsList
                    key={_key}
                    heading={heading}
                    subtitle={subtitle}
                    events={events}
                  />
                );
                break;
              case "cta":
                el = (
                  <CallToAction
                    key={_key}
                    heading={heading}
                    external={external}
                    internal={internal}
                  />
                );
                break;
              case "specsList":
                el = (
                  <Specifications key={_key} heading={heading} specs={specs} />
                );
                break;
              default:
                el = null;
            }
            return el;
          })
        : null}
    </div>
  );
}

export async function getServerSideProps({ preview = false }) {
  const page = await getClient(preview).fetch(homeQuery);
  const settings = await getClient(preview).fetch(siteSettingsQuery);
  const mainNav = await getClient(preview).fetch(mainNavQuery);

  return {
    props: {
      page,
      settings,
      mainNav,
      preview,
    },
  };
}
