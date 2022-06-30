import { GrNavigate } from "react-icons/gr";

export default {
  name: "navMenu",
  title: "Nav Menu",
  type: "document",
  icon: GrNavigate,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "Use this to describe what kind of menu you are creating (social, main, faq, etc.)",
    },
    {
      name: "items",
      type: "array",
      title: "Navigation items",
      of: [{ type: "cta" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
