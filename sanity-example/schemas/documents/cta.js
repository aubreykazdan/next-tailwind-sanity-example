export default {
  title: "Call to action",
  name: "cta",
  type: "document",
  initialValue: { title: "Call to Action" },
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      hidden: true,
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
      description: "this will be the selectable text",
    },
    {
      name: "external",
      title: "External URL",
      description: "Use fully qualified URLS for external link",
      type: "url",
      hidden: ({ parent, value }) => !value && parent?.internal,
    },
    {
      name: "internal",
      title: "Internal Link",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "page" }],
      hidden: ({ parent, value }) => !value && parent?.external,
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "title",
    },
  },
};
