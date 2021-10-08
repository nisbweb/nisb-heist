import Vue from 'vue'
import MessagesIcon from '../components/Icon/MessagesIcon.vue'
import NewsIcon from '../components/Icon/NewsIcon.vue'
import GalleryIcon from '../components/Icon/GalleryIcon.vue'
export default {
  state: {
    route: 'home',
    messages: [
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      },
      {
        name: 'Madhu',
        content: 'Hello guys',
        read: false
      }
    ],
    posts: [
      // {
      //   title: 'This is a sample Title',
      //   description:
      //     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      // }
    ],
    gallery: [
      // {
      //   name: 'Something',
      //   type: 'image',
      //   src: 'something'
      // },
      // {
      //   name: 'Something else',
      //   type: 'image',
      //   src: 'somethingelse'
      // },
      // {
      //   name: 'Video',
      //   type: 'video',
      //   src: 'video'
      // }
    ]
  },
  mutations: {
    SET_ROUTE: (state, value) => {
      state.route = value
    },
    PUSH_MESSAGE: (state, value) => {
      state.messages.push(value)
    },
    PUSH_POST: (state, value) => {
      state.posts.push(value)
    },
    PUSH_GALLERY_ITEM: (state, value) => {
      state.gallery.push(value)
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
  actions: {
    LOAD_EVENT: ({ dispatch }, { event, options }) => {
      switch (event.type) {
        case 'message':
          dispatch('LOAD_MESSAGES', { event, options })
          break
        case 'news':
          dispatch('LOAD_NEWS', { event, options })
          break
        case 'gallery':
          dispatch('LOAD_GALLERY', { event, options })
          break
      }
    },
    LOAD_MESSAGES: ({ commit }, { event, options }) => {
      for (let i = 0; i < event.messages.length; i++) {
        commit('PUSH_MESSAGE', {
          ...event.messages[i],
          read: options.silent
        })
        if (options.setCurrentEvent) {
          commit('SET_CURRENT_EVENT', options.currentEvent)
        }
        if (!options.silent) {
          Vue.$toast(
            `${event.messages[i].name}: ${event.messages[i].content}`,
            {
              icon: MessagesIcon
            }
          )
        }
      }
    },
    LOAD_NEWS: ({ commit }, { event, options }) => {
      for (let i = 0; i < event.posts.length; i++) {
        commit('PUSH_POST', event.posts[i])
        if (options.setCurrentEvent) {
          commit('SET_CURRENT_EVENT', options.currentEvent)
        }
        if (!options.silent) {
          Vue.$toast(`News: ${event.posts[i].title}`, {
            icon: NewsIcon
          })
        }
      }
    },
    LOAD_GALLERY: ({ commit }, { event, options }) => {
      for (let i = 0; i < event.items.length; i++) {
        commit('PUSH_GALLERY_ITEM', event.items[i])
        if (options.setCurrentEvent) {
          commit('SET_CURRENT_EVENT', options.currentEvent)
        }
        if (!options.silent) {
          Vue.$toast(`Gallery: there is a new ${event.items[i].type}`, {
            icon: GalleryIcon
          })
        }
      }
    }
  },
  getters: {
    GET_ROUTE: state => state.route,
    GET_POSTS: state => state.posts,
    GET_GALLERY: state => {
      return state.gallery.map(x => {
        switch (x.src) {
          case 'vp_tied':
            x.result = require('../assets/gallery/4 v&p tied.png')
            break
          case 'poster':
            x.result = require('../assets/gallery/3 Poster from shreesh.mp4')
            break
          case 'cctv':
            x.result = require('../assets/gallery/2 cctv vid.mp4')
            break
          case 'prof':
            x.result = require('../assets/gallery/1 prof.mp4')
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
