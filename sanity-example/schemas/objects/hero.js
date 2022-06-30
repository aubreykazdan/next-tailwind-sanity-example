// hero.js
export default {
  name: "hero",
  type: "object",
  title: "Hero",
  initialValue: {
    title: "Hero",
    heading: "No Heading Here",
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
      name: "tagline",
      type: "string",
      title: "Tagline",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Video file",
      name: "video",
      type: "mux.video",
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
  preview: {
    select: {
      title: "heading",
      subtitle: "title",
    },
  },
};
