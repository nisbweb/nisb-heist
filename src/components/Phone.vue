<template>
  <div id="Phone" :class="route">
    <img src="@/assets/iphone-transparent.png" alt="" class="height-phone width-phone absolute left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
    <div id="phone-screen" style="height: 632px !important; width: 291px !important;" class="rounded-3xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 pt-0">

      <div id="statusbar" class="flex flex-row justify-end pt-2 pr-1 mb-gray-100 pb-2">
        <box-icon color="white" size="xs" name="wifi" class="mr-2"></box-icon>
        <box-icon color="white" size="xs" name="battery" class="mr-4" type="solid"></box-icon>
      </div>
      <div id="app-screen" class="app-screen pt-0 px-4">
        <div id="home-screen" class="flex flex-wrap" v-if="route === 'home'">
          <div @click="redirect(app.name)" class="app cursor-pointer flex flex-col items-center justify-center mt-8 w-1/2" v-for="app in apps" :key="app.name">
            <div class="app-icon flex items-center justify-center py-2 px-2 rounded-lg mb-1 bg-primary-red relative">
              <box-icon color="white" :name="app.icon"></box-icon>
              <div v-if="questions[progress].events && questions[progress].events[currentEvent] && questions[progress].events[currentEvent].type === app.type" class="notification-dot w-4 h-4 rounded-full bg-blue-600 mr-2 absolute -top-2 -right-4"></div>
            </div>
            <span class="app-name text-white">
              {{app.name}}
            </span>
          </div>
        </div>
        <Messages v-else-if="route === 'messages'" />
        <News v-else-if="route === 'news'" />
        <Gallery v-else-if="route === 'gallery'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Messages from '@/components/Messages.vue'
import News from '@/components/News.vue'
import Gallery from '@/components/Gallery.vue'
export default {
  name: 'Phone',
  components: {
    Messages,
    News,
    Gallery
  },
  data () {
    return {
      // apps
      apps: [
        {
          name: 'messages',
          icon: 'chat',
          type: 'message'
        },
        {
          name: 'gallery',
          icon: 'image',
          type: 'gallery'
        },
        {
          name: 'news',
          icon: 'news',
          type: 'news'
        }
      ]

    }
  },
  methods: {
    redirect (name) {
      this.$store.commit('SET_ROUTE', name)
    }
  },
  computed: {
    ...mapGetters({
      route: 'GET_ROUTE',
      questions: 'GET_QUESTIONS',
      progress: 'GET_PROGRESS',
      currentEvent: 'GET_CURRENT_EVENT'
    })
  }
}
</script>

<style lang="scss">
#phone-screen {
  border-radius: 2.2rem;
}
.height-phone {
  height: 666px !important;
}
.width-phone {
  width: 330px !important;
}
#phone-screen {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.home #phone-screen {
  background-image: url("../assets/phone-wallpeper.png");
}

.messages #phone-screen , .messages .header{
  background-color: rgb(30,30,40);
}
.news #phone-screen , .news .header{
  background-color: rgb(30,30,40);
}
.gallery #phone-screen , .gallery .header{
  background-color: rgb(30,30,40);
}
.app-screen {
  height: calc(100% - 28.8px);
}
</style>
