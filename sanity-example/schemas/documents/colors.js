export default {
  name: "colors",
  title: "Colors Per Page",
  type: "document",
  description: "",
  __experimental_actions: ["update", "create", "delete", "publish"],
  initialValue: {
    title: "Main Color Profile",
  },
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "Use this title to describe what kind of color scheme this profile represents (main, dark theme, etc.)",
    },
    {
      name: "fontColor",
      type: "color",
      title: "Font Color",
      description:
        "Used to generate the font color for websites, press materials, etc",
    },
    {
      name: "backgroundColor",
      type: "color",
      title: "Background Color",
      description:
        "Used to generate the primary accent color for websites, press materials, etc",
    },
    {
      name: "highlightColor",
      type: "color",
      title: "Highlight Color",
      description:
        "Used to generate the secondary accent color for websites, press materials, etc",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
