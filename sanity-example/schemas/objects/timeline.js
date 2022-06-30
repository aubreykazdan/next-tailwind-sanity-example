// timeline.js

export default {
  name: "timeline",
  type: "object",
  title: "Timeline",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "events",
      type: "array",
      title: "Events",
      of: [
        {
          name: "event",
          type: "object",
          title: "Event",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
            },
            {
              name: "date",
              type: "string",
              title: "Date",
            },
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
            {
              name: "completed",
              type: "boolean",
              title: "Has this goal been reached/completed?",
              // validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
