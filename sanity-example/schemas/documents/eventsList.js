export default {
  name: "eventsList",
  title: "Events List",
  type: "document",
  description: "Description",
  initialValue: { title: "Events List" },
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      hidden: true,
    },
    {
      name: "heading",
      title: "Heading",
      description: "example: upcoming events, past events, etc.",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      description: "Use subtitle if needed",
      type: "string",
    },
    {
      title: "Events",
      name: "events",
      type: "array",
      of: [
        {
          name: "event",
          title: "Event",
          type: "reference",
          to: [{ type: "events" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "title",
    },
  },
};
