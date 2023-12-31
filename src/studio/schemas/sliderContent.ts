export default {
    name: 'sliderContent',
    title: 'Slider Content',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'buttonTitle',
            title: 'Button Title',
            type: 'string',
        },
    ]
}