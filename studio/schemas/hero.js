export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "image2",
      title: "Image2",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "buttonText",
      title: "ButtonText",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },
    {
      name: "heading1",
      title: "Heading1",
      type: "string",
    },
    {
      name: "heading2",
      title: "Heading2",
      type: "string",
    },
    {
      name: "discount",
      title: "Discount",
      type: "string",
    },
    {
      name: "saleTime",
      title: "SaleTime",
      type: "string",
    },
  ],
};
