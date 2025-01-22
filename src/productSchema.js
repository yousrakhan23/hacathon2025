export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'sku',
        title: 'SKU',
        type: 'string'
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: Rule => Rule.required().positive()
      },
      {
        name: 'discountPrice',
        title: 'Discount Price',
        type: 'number'
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true
        }
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'shortDescription',
        title: 'Short Description',
        type: 'text'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{ type: 'category' }]
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'brand',
        title: 'Brand',
        type: 'reference',
        to: [{ type: 'brand' }]
      },
      {
        name: 'inStock',
        title: 'In Stock',
        type: 'boolean'
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number'
      },
      {
        name: 'weight',
        title: 'Weight (in kg)',
        type: 'number'
      },
      {
        name: 'dimensions',
        title: 'Dimensions',
        type: 'object',
        fields: [
          { name: 'length', type: 'number', title: 'Length' },
          { name: 'width', type: 'number', title: 'Width' },
          { name: 'height', type: 'number', title: 'Height' }
        ]
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'variants',
        title: 'Variants',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'name', type: 'string', title: 'Variant Name' },
              { name: 'sku', type: 'string', title: 'Variant SKU' },
              { name: 'price', type: 'number', title: 'Variant Price' },
              { name: 'inStock', type: 'boolean', title: 'In Stock' }
            ]
          }
        ]
      },
      {
        name: 'relatedProducts',
        title: 'Related Products',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'product' }]
          }
        ]
      }
    ]
  }
  
  