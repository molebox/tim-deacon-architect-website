export default {
    name: 'info',
    title: 'Home Page Info',
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
        name: 'about',
        title: 'About Your Service',
        type: 'blockContent',
        description: 'What do you offer? This will be displayed under your logo on the left'
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        description: 'Your contact email'
      },
    ],
  }
  