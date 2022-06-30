export default {
  name: "page",
  type: "document",
  title: "Page Builder",
  // __experimental_actions: [
  //   /*"create new"*/
  // ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Use this title to describe what kind of page you are making (home, about, contact, etc.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
    },
    {
      name: "ogImage",
      type: "image",
      title: "OG Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },

    {
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        { type: "hero" },
        { type: "textWithIllustration" },
        { type: "cta" },
        { type: "eventsList" },
        { type: "gallery" },
        { type: "cardsList" },
        { type: "specsList" },
        { type: "timeline" },
        { type: "team" },
        { type: "faq" },
        { type: "form" },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
};
