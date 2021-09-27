<template>
  <div id="Logo" class="cursor-pointer" :class="{'logo-animate': animate}">
    <h1 class="text-6xl flex items-center w-max text-gray-800">LA CASA
      <span class="px-3 py-2 mx-1 text-4xl bg-red-700 text-white">DE</span>
       TESORO</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    animate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Compacta";
  src: url("../assets/fonts/CompactaBT.ttf");
}
h1 {
  font-family: "Compacta";
  letter-spacing: 1px;
  word-spacing: 0.1rem;
}

@keyframes conjure {
  from {opacity: 0;transform: translateY(10px);}
  to {opacity: 1;transform: translateY(0px);}
}

.logo-animate {
  animation: conjure 2s ease-in-out 0s 1 alternate;
}
</style>
