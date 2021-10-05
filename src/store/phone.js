export default {
  state: {
    route: 'home',
    messages: [
      {
        name: 'Shreesh',
        content: 'Hello Madhu, how you doing',
        read: false
      },
      {
        name: 'Varun',
        content: 'Hello Shreesh, whats up',
        read: false
      },
      {
        name: 'Shreesh',
        content: 'Hello Madhu, how you doing 2',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      }
    ],
    posts: [
      {
        title: 'This is a sample Title',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      }
    ],
    gallery: [
      {
        name: 'Something',
        type: 'image',
        src: 'something'
      },
      {
        name: 'Something else',
        type: 'image',
        src: 'somethingelse'
      },
      {
        name: 'Video',
        type: 'video',
        src: 'video'
      }
    ]
  },
  mutations: {
    SET_ROUTE: (state, value) => {
      state.route = value
    },
    MARK_AS_READ: (state, value) => {
      state.messages = state.messages.map(x => {
        if (x.name === value) {
          x.read = true
        }
        return x
      })
    }
  },
  actions: {},
  getters: {
    GET_ROUTE: state => state.route,
    GET_POSTS: state => state.posts,
    GET_GALLERY: state => {
      return state.gallery.map(x => {
        switch (x.src) {
          case 'something':
            x.result = require('../assets/logo.png')
            break
          case 'somethingelse':
            x.result = require('../assets/gallery/Screenshot.png')
            break
          case 'video':
            x.result = require('../assets/gallery/Video.mp4')
            break
        }
        return x
      })
    },
    GET_MESSAGES: state => {
      const result = {};
      [...state.messages].reverse().forEach(x => {
        if (!result[x.name]) {
          result[x.name] = []
        }
        result[x.name].push({ message: x.content, read: x.read })
      })
      return result
    }
  }
}
