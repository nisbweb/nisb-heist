<template>
  <div id="Home" class="min-h-screen pt-20 2xl:pt-32">
    <nav class="flex items-center justify-between fixed top-0 left-0 w-full py-2">
      <Logo :animate="false" class="transform scale-50 -translate-x-16"/>
      <div id="profile" class="flex flex-row items-center justify-center px-10">
        <span class="font-semi-bold text-xl mr-4">{{user.code}}</span>
        <img src="@/assets/icons8-money-heist-dali.svg" alt="" class="">
        <button class="ml-2" @click="signOut">Sign out</button>
      </div>
    </nav>

    <div id="content" class="flex flex-wrap">
      <Phone id="phone" class="w-1/2 h-full relative height-phone">
      </Phone>
      <div id="question" class="w-5/12">
        <Question />
      </div>
    </div>
    <div v-if="galleryItem" id="popup" class="fixed top-0 left-0 w-full h-screen p-32 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 cursor-pointer" @click="closePopup">
      <img v-if="galleryItem.type === 'image'" :src="galleryItem.item" alt="" @click.stop class="h-full object-center object-contain">
      <video v-if="galleryItem.type === 'video'" class="h-full object-center object-contain" @click.stop controls>
        <source :src="galleryItem.item" type="video/mp4">
      </video>
    </div>

  </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import Logo from '@/components/Logo.vue'
import { mapGetters } from 'vuex'
import Phone from '@/components/Phone.vue'
import Question from '@/components/Question.vue'

export default {
  name: 'Home',
  components: {
    Phone,
    Logo,
    Question
  },
  methods: {
    signOut () {
      const auth = getAuth()
      signOut(auth).then(() => {
        // Sign-out successful.
        this.$router.push({ name: 'Sign-In' })
      }).catch((err) => {
        console.error(err)
      })
    },
    closePopup () {
      this.$store.commit('SET_GALLERY_ITEM', null)
    }
  },
  computed: {
    ...mapGetters({
      user: 'GET_USER',
      galleryItem: 'GET_GALLERY_ITEM'
    })
  }
}
</script>
<style lang="scss" scoped>
#phone-screen {
  border-radius: 2.2rem;
}
.height-phone {
  height: 666px !important;
}
.width-phone {
  width: 330px !important;
}
</style>
