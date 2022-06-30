export default {
  name: "spec",
  type: "object",
  title: "Spec",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "value",
      title: "Value",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "value",
    },
  },
};
