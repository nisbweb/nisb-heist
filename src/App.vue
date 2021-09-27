<template>
  <div id="app">
    <router-view/>
    <transition name="fade">
      <div id="loading" v-if="loading" class="min-h-screen w-full flex  flex-col items-center justify-center fixed top-0 left-0 bg-white z-50">
        <Logo class="mb-48"/>
        <svg class="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '@/components/Logo.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    Logo
  },
  computed: {
    ...mapGetters({ loading: 'GET_LOADING' })
  },
  created () {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.spinner {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;

  & .path {
    stroke: rgb(31, 41, 55);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease-in-out 1.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: translateY(35px);
    background: transparent;
}
</style>
