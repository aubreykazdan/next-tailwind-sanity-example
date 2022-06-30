export default {
  name: "cardsList",
  type: "document",
  title: "Cards",
  initialValue: {
    title: "Cards",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      hidden: true,
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [{ type: "card" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "title",
    },
  },
};
