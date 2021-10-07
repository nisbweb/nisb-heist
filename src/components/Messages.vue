<template>
  <div id="Messages" class="h-full">
        <div id="messages-screen" class="text-gray-100 h-full relative">
          <div class="chats h-full overflow-y-scroll hide-scrollbar pt-10" v-if="whoChat===null">
            <div class="header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2">
              <box-icon size="xs" name="left-arrow" color="white" class="mr-6 mb-2 cursor-pointer" @click="closeMessages"></box-icon>
              <span>
                Messages
              </span>
              <span class="w-10"></span>
            </div>
            <div v-for="(value, propertyName, index) in messages" :key="index" @click="openChat(propertyName)">
              <div class="chat-name flex items-center justify-between py-2 hover:bg-blue-900 px-4 my-2 rounded-lg cursor-pointer">
                <span class="flex flex-col">
                  <span class="">
                    {{propertyName}}
                  </span>
                  <span class="text-xs text-gray-300">
                    {{value[0].message}}
                  </span>

                </span>
                <div v-if="unreadCount(propertyName) !== 0" class="chat-count text-xs bg-gray-600 px-2 py-1 rounded-2xl">{{unreadCount(propertyName)}}</div>
              </div>
            </div>
          </div>
          <div class="personal-chat flex flex-col items-start justify-between h-full" v-else>
            <div class="header font-bold text-xl text-white mb-3 flex items-center justify-between w-full">
              <box-icon size="xs" name="left-arrow" color="white" class="mr-6 mb-2 cursor-pointer" @click="whoChat=null"></box-icon>
              <span>
                {{whoChat}}
              </span>
              <span class="w-10"></span>
            </div>
            <div class="messages pb-5 flex flex-col-reverse">
              <div v-for="(content, index) in messages[whoChat]" :key="index" class="message my-2 mr-6 bg-indigo-800 px-4 py-2 rounded-lg rounded-bl-none">
                {{content.message}}
              </div>
            </div>

          </div>
        </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data () {
    return {
      whoChat: null
    }
  },
  mounted () {
    if (this.questions[this.progress].events && this.questions[this.progress].events[this.currentEvent].type === 'message') {
      this.$store.dispatch('NEXT_EVENT')
    }
  },
  computed: {
    ...mapGetters({
      route: 'GET_ROUTE',
      messages: 'GET_MESSAGES',
      progress: 'GET_PROGRESS',
      currentEvent: 'GET_CURRENT_EVENT',
      questions: 'GET_QUESTIONS'
    })
  },
  methods: {
    closeMessages () {
      this.$store.commit('SET_ROUTE', 'home')
    },
    openChat (name) {
      this.$store.commit('MARK_AS_READ', name)
      this.whoChat = name
    },
    unreadCount (name) {
      return this.messages[name].filter(x => !x.read).length
    }

  }
}
</script>

<style>

</style>
