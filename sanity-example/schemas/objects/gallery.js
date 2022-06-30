// imageGallery.js

export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  initialValue: {
    title: "Gallery",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Only used in Sanity to describe section",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "imageGallery",
      type: "array",
      title: "Image Gallery",
      of: [
        {
          name: "imageContainer",
          title: "Image Container",
          type: "object",
          fields: [
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
              // validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
};
