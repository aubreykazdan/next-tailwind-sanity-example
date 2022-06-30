import SlugInput from "sanity-plugin-better-slug";

export default {
  title: "Events",
  name: "events",
  type: "object",
  fields: [
    {
      title: "Headlining Artist / Name of Event",
      name: "heading",
      type: "string",
    },
    {
      title: "Opening Artist(s) / Event Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Age Limit",
      name: "ageLimit",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      // validation: (Rule) => Rule.required(),
      options: {
        source: (doc) => `${doc.title}`,
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "End Date",
      name: "endDate",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "Today",
      },
    },
    {
      title: "Image",
      name: "image",
      type: "image",
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
    },
  ],
  orderings: [
    {
      title: "Event Date, New",
      name: "dateDesc",
      by: [{ field: "startDate", direction: "desc" }],
    },
    {
      title: "Event Date, Old",
      name: "dateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
    {
      title: "Title",
      name: "title",
      by: [{ field: "title", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "startDate",
      media: "image",
    },
  },
};
