export default {
  title: "Specifications List",
  name: "specsList",
  type: "document",
  initialValue: {
    title: "Specifications List",
  },
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
    },
    {
      title: "Specs",
      name: "specs",
      type: "array",
      of: [{ type: "spec" }],
    },
    {
      name: "finePrint",
      title: "Fine Print",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "title",
    },
  },
};
