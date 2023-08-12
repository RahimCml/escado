<script>

import HeaderMenu from './components/header-menu.vue';
import FooterComponent from './components/footerComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
    FooterComponent
  },
};
</script>

<template>
    <div id="app">
      <HeaderMenu />
    <router-view />
    <FooterComponent />
</div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "ubuntu";
}
</style>
