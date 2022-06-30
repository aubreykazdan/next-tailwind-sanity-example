export const homeQuery = `
*[_type == "page" && slug.current == "home"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]{
    ...,
    video {
      asset->
    },
    events[]->,
    internal->{
      "slug": slug.current
    }
  }
}
`;

export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  frontpage->,
  siteLogo[0],
  websiteTitle,
  url
}
`;

export const mainNavQuery = `
*[_type == "navMenu" && title == "Main"][0] {
  _id,
  title,
  items[]{
    _key,
    _type,
    heading,
    external,
    internal->{
    slug{
      current
      }
    }
  }
}

`;

export const socialsQuery = `
*[_type == "socials"][0]{
  _id,
  discord,
  instagram,
  spotify,
  twitter,
  facebook,
  youtube,
  title
}
`;

export const eventsQuery = `
  *[_type == "events"]{
  _id,
  title,
  subtitle,
  ageLimit,
  "slug": slug.current,
  location,
  startDate,
  endDate,
  "image": image.asset,
  "alt": image.alt
}
`;
