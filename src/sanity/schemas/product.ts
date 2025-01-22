// export default {
//     name: 'product',
//     title: 'Product',
//     type: 'document',
//     fields: [
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//         validation: (Rule: any) => Rule.required(),
//       },
//       {
//         name: 'slug',
//         title: 'Slug',
//         type: 'slug',
//         options: {
//           source: 'name',
//           maxLength: 96,
//         },
//         validation: (Rule: any) => Rule.required(),
//       },
//       {
//         name: 'price',
//         title: 'Price',
//         type: 'number',
//         validation: (Rule: any) => Rule.required().positive(),
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'text',
//       },
//       {
//         name: 'image',
//         title: 'Image',
//         type: 'image',
//         options: {
//           hotspot: true,
//         },
//       },
//     ],
//   }
  
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: import('@sanity/types').Rule) => Rule.required(), // Correctly type the validation function
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: import('@sanity/types').Rule) => Rule.required(), // Correctly type the validation function
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: import('@sanity/types').Rule) => Rule.required().positive(), // Correctly type the validation function
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
