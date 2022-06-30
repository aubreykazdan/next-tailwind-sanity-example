export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: [/*"create",*/ "update", /*'delete',*/ "publish"],
  initialValue: {
    title: "Meta Settings",
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    },
    {
      name: "websiteTitle",
      title: "Website Title",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      description: "The main site url. Used to create canonical url",
      placeholder: "https://",
    },
    {
      name: "frontpage",
      type: "reference",
      description: "Choose page to be the frontpage",
      to: { type: "page" },
    },
    {
      name: "siteLogo",
      type: "array",
      title: "Site Logo",
      description: "Site Logo Upload",
      validation: (Rule) => Rule.length(1),
      options: {
        layout: "grid",
      },
      of: [
        {
          title: "Site Logo",
          type: "svgUploadPreview",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url",
      media: "image",
    },
  },
};
