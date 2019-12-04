export function loadLists() {
  return [
    {
      title: 'Tasks',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Study NodeJs module 01',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        },
        {
          id: 2,
          content:
            'Create video for Youtube teaching how to recreate the Pipefy interface',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Study React Native module 03',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        },
        {
          id: 4,
          content:
            'Record Class "NextJS: Using server-side rendering with ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        },
        {
          id: 5,
          content: 'Record tests and deploy with ReactJS',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        }
      ]
    },
    {
      title: 'Doing',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recreating Pipefy Clone',
          labels: [],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        }
      ]
    },
    {
      title: 'Paused',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Record about Geolocation and Maps with React Native',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Record tests and deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/200/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Walnutjs library adjustments',
          labels: []
        }
      ]
    },
    {
      title: 'Done',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Record deployment and CI lesson with React Native',
          labels: []
        },
        {
          id: 12,
          content: 'Record tests and deploy ReactJS',
          labels: ['#54e1f7']
        },
        {
          id: 13,
          content:
            'Write Class "Internationalization of Node.js, ReactJS and React Native Applications"',
          labels: ['#7159c1']
        }
      ]
    }
  ];
}
