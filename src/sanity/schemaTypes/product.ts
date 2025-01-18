import { defineField, defineType } from "sanity";

export const Product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {source: "name"}
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{type: "image",}]
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    { name: "discount", 
        title: "Discount",
        type: "number" },
    {
      name: "rate",
      title: "Rate",
      type: "number",
    },
    {
      name: "reviews",
      title: "Reviews",
      type: "number",
    },
  ],
});