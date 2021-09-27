<template>
  <div id="Phone">
    <img src="@/assets/iphone-transparent.png" alt="" class="height-phone width-phone absolute left-1/2 transform -translate-x-1/2 z-10">
    <div id="phone-screen" style="height: 632px !important; width: 291px !important;" class="rounded-3xl absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-0 pt-8">
      <div id="home-screen" class="flex flex-wrap">
        <div class="w-1/2">whatsapp</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phone',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
#phone-screen {
  border-radius: 2.2rem;
  background-image: url("../assets/phone-wallpeper.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.height-phone {
  height: 666px !important;
}
.width-phone {
  width: 330px !important;
}
</style>
