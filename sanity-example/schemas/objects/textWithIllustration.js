// textWithIllustration.js

export default {
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
  fields: [
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
  ],
};
