<template>
  <div id="Congratulations" class="min-h-screen flex items-center justify-center">
    <div class="wrapper flex justify-center flex-col items-center">
      <img src="@/assets/beer.svg" alt="" class="w-1/2 animate">
      <div class="content text-lg animate mt-3">
        Congratulations <span class="font-bold">{{user.code}}</span>, on finding the culprit 🎉!
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  title: 'Congratulations',
  components: {
  },
  data () {
    return {

    }
  },
  mounted () {
    setTimeout(() => {
      this.$router.push({ name: 'Result' })
    }, 5000)
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
