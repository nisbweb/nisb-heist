<template>
  <div id="Gallery" class="h-full">
    <div id="gallery-screen" class="text-gray-100 h-full relative">
      <div class=" overflow-y-scroll hide-scrollbar h-full pt-10">
        <div class="header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2">
          <box-icon size="xs" name="left-arrow" color="white" class="mr-6 mb-2 cursor-pointer" @click="closeApp"></box-icon>
          <span>
            Gallery
          </span>
          <span class="w-10"></span>
        </div>
        <div class="gallery-wrapper flex mt-4 flex-wrap">
          <div v-for="(element, index) in gallery" :key="index" class="w-1/2 px-2 overflow-hidden rounded-xl">
            <div v-if="element.type === 'image'" class="image w-1/2 h-32 flex items-center justify-centera w-full cursor-pointer my-4" @click="openPopup(element.result, element.type)">
              <img :src="element.result" alt="" class="h-full w-full object-center object-cover">
            </div>
            <div v-if="element.type === 'video'" class="video w-1/2 h-32 bg-white flex items-center justify-centera rounded-xl w-full cursor-pointer" @click="openPopup(element.result, element.type)">
              <video class="w-full object-center object-cover">
                <source :src="element.result" type="video/mp4">
              </video>
            </div>
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
    }
  },
  mounted () {
    if (this.questions[this.progress].events && this.questions[this.progress].events[this.currentEvent].type === 'gallery') {
      this.$store.dispatch('NEXT_EVENT')
    }
  },
  computed: {
    ...mapGetters({
      route: 'GET_ROUTE',
      gallery: 'GET_GALLERY',
      progress: 'GET_PROGRESS',
      currentEvent: 'GET_CURRENT_EVENT',
      questions: 'GET_QUESTIONS'
    })
  },
  methods: {
    openPopup (item, type) {
      this.$store.commit('SET_GALLERY_ITEM', { item, type })
    },
    closeApp () {
      this.$store.commit('SET_ROUTE', 'home')
    }
  }
}
</script>

<style>

</style>
