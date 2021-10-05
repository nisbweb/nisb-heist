<template>
  <div id="News" class="h-full">
    <div id="news-screen" class="text-gray-100 h-full relative">
      <div class=" overflow-y-scroll hide-scrollbar h-full pt-10">
        <div class="header font-bold text-xl text-white mb-3 flex items-center justify-between w-full absolute top-0 left-0 py-2">
          <box-icon size="xs" name="left-arrow" color="white" class="mr-6 mb-2 cursor-pointer" @click="closeApp"></box-icon>
          <span>
            News
          </span>
          <span class="w-10"></span>
        </div>
        <div class="posts-wrapper flex flex-col-reverse mt-4">
          <div class="post bg-red-600 bg-opacity-40 rounded-lg py-3 px-4 my-4" v-for="(post, index) in posts" :key="index">
            <h4 class="title text-lg font-bold mb-1">{{post.title}}</h4>
            <p class="description text-normal leading-5">
              {{post.description}}
            </p>
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
  },
  computed: {
    ...mapGetters({
      route: 'GET_ROUTE',
      posts: 'GET_POSTS'
    })
  },
  methods: {
    closeApp () {
      this.$store.commit('SET_ROUTE', 'home')
    }
  }
}
</script>

<style>

</style>
