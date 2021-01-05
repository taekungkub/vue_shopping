<template>
  <v-app>
    <NavigationTop></NavigationTop>
    <v-main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import NavigationTop from "./components/shared/navigation-top";
import Footer from "./components/shared/footer";

export default {
  name: "App",

  components: {
    HelloWorld,
    NavigationTop,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>