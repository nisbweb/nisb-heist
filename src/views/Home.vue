<template>
  <div id="Home" class="min-h-screen pt-20">
    <nav class="flex items-center justify-between fixed top-0 left-0 w-full py-2">
      <Logo :animate="false" class="transform scale-50 -translate-x-16"/>
      <div id="profile" class="flex flex-row items-center justify-center px-10">
        <span class="font-semi-bold text-xl mr-4">{{user.code}}</span>
        <img src="@/assets/icons8-money-heist-dali.svg" alt="" class="">
      </div>
    </nav>

    <div id="content" class="flex flex-wrap">
      <Phone id="phone" class="w-1/2 h-full relative height-phone">
      </Phone>
      <div id="question" class="w-1/2">
        Question
      </div>
    </div>

  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import { mapGetters } from 'vuex'
import Phone from '@/components/Phone.vue'

export default {
  name: 'Home',
  components: {
    Phone,
    Logo
  },
  computed: {
    ...mapGetters({
      user: 'GET_USER'
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
