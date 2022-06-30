// First, we must import the schema creator
// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import page from "./documents/page";
import siteSettings from "./documents/siteSettings";
import navMenu from "./documents/navMenu";
import cta from "./documents/cta";
import textWithIllustration from "./objects/textWithIllustration";
import hero from "./objects/hero";
import gallery from "./objects/gallery";
import form from "./objects/form";
import cardsList from "./documents/cardsList";
import card from "./objects/card";
import timeline from "./objects/timeline";
import team from "./objects/team";
import faq from "./objects/faq";
import blockContent from "./arrays/blockContent";
import svgUploadPreview from "sanity-plugin-inline-svg";
import socials from "./documents/socials";
import eventsList from "./documents/eventsList";
import event from "./objects/event";
import specsList from "./documents/specsList";
import spec from "./objects/spec";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // your types here
    page,
    eventsList,
    event,
    siteSettings,
    socials,
    navMenu,
    cta,
    hero,
    textWithIllustration,
    cardsList,
    card,
    specsList,
    spec,
    gallery,
    form,
    timeline,
    team,
    faq,
    blockContent,
    svgUploadPreview,
  ]),
});
