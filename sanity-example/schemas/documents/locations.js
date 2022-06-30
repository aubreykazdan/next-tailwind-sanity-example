export default {
  name: "locations",
  title: "Locations",
  type: "document",
  initialValue: {
    title: "Locations of Nav Menus",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      hidden: true,
    },
    {
      name: "header",
      title: "Header",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "navMenu" }],
        },
      ],
    },
    {
      name: "footer",
      title: "Footer",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "navMenu" }],
        },
      ],
    },
  ],
};
