import { Rule } from '@sanity/types';  // Import Rule type from Sanity

const apiProductsSchema = {
    name: 'APIProducts',
    title: 'APIProducts',
    type: 'document',
    fields: [
        {
            name: 'product_name',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'product_description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'product_price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'product_sizes',
            title: 'Available Sizes',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'product_stock_quantity',
            title: 'Stock Quantity',
            type: 'number',
        },
        {
            name: 'product_image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'product_rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule: Rule) => Rule.min(0).max(100), // Explicitly typing Rule
        },
    ],
};

export default apiProductsSchema;
