export default {
  name: "team",
  type: "object",
  title: "Team",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          name: "card",
          type: "image",
          title: "Card",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Heading",
            },
            {
              name: "excerpt",
              type: "string",
              title: "Excerpt",
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
      preview: {
        select: {
          title: "header",
          media: "avatar",
        },
      },
    },
  ],
};
