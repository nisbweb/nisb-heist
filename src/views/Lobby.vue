<template>
  <div id="Lobby" class="min-h-screen flex items-center justify-center">
    <div class="wrapper flex justify-center flex-col items-center">
      <Logo />
      <div class="content text-lg animate mt-3">
        Welcome <span class="font-bold">{{user.code}}</span>, Please wait the event will start soon!
      </div>
      <div class="content animate w-1/2 text-center mt-8">
        <span class="font-bold">DISCLAIMER: </span><br> The event is programmed analogous to an online game.
The storyline of the game is completely fictional and does not hold any resemblance to reality.
Any of the characters appearing in the story hold no relevance to their circumstances in the game.
Thank you.
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import { mapGetters } from 'vuex'
import db from '../firebase.js'
import { doc, onSnapshot } from 'firebase/firestore'
export default {
  name: '',
  title: 'Lobby',
  components: {
    Logo
  },
  data () {
    return {

    }
  },
  mounted () {
    onSnapshot(doc(db, 'admin', 'admin'), (doc) => {
      if (doc.data().started === true) {
        this.$router.push({ name: 'Home' })
      }
    })
  },
  computed: {
    ...mapGetters({
      user: 'GET_USER'
    })
  }
}
</script>

<style lang="scss" scoped>
@keyframes conjure {
  from {opacity: 0;transform: translateY(10px);}
  to {opacity: 1;transform: translateY(0px);}
}

.animate {
  animation: conjure 2s ease-in-out 0s 1 alternate;
}

</style>
