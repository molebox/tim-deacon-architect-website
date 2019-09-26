export default {
    name: 'metadata',
    title: 'Site Metadata',
    type: 'document',
    fields: [
        {
            title: 'Site Keywords',
            name: 'keywords',
            description: 'Enter the keywords you want to rank for on search engines. You can add as many or as few as you like. Make them unique to your business.',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text',
            description: 'The description that will show up in the google search for your website. Try and include some of your keywords.'
          },
    ]
}