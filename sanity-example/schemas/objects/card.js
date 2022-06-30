export default {
  name: "card",
  type: "object",
  title: "Card",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description:
        "Use this to describe your image for users with accessibility needs",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      image: "image",
      title: "content",
      subtitle: "heading",
    },
  },
};
