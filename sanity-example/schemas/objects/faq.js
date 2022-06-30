export default {
  name: "faq",
  type: "object",
  title: "FAQ",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          name: "card",
          type: "object",
          title: "Card",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "number",
              type: "number",
              title: "Number",
            },
            {
              name: "question",
              type: "string",
              title: "Question",
            },
            {
              name: "answer",
              type: "array",
              title: "Answer",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
      preview: {
        select: {
          title: "header",
        },
      },
    },
  ],
};
