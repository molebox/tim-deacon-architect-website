export default {
    name: 'content',
    title: 'Home Page Image',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Use your sites name, so Tim Deacon Architect'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Just hit the button, it will use your title but add - between the words',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        description: 'Upload an image to display on the home page',
        options: {
          hotspot: true
        }
      }
    ],
  }
  