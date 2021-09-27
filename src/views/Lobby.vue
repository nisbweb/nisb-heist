<template>
  <div id="Lobby" class="min-h-screen flex items-center justify-center">
    <div class="wrapper">
      <Logo />
      <div class="content animate">
        Welcome
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  name: '',
  title: 'Lobby',
  components: {
    Logo
  },
  data () {
    return {

    }
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
