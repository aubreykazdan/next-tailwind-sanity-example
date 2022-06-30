// form.js

export default {
  name: "form",
  type: "object",
  title: "Form",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "form",
      type: "string",
      title: "Form",
      description: "Select form type",
      options: {
        list: ["newsletter", "register", "contact"],
      },
    },
  ],
};
