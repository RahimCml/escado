<script>

import HeaderMenu from './components/header-menu.vue';
import FooterComponent from './components/footerComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
    FooterComponent
  },  mounted() {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.setAttribute('defer', '');
    script.onload = () => {
      // ElfSight widgeti yükledikten sonra burada başlatın.
      // Widgetin başlatılması için ElfSight tarafından sağlanan yönergeleri izleyin.
    };
    document.head.appendChild(script);
  }
};
</script>

<template>
    <div id="app">
      <HeaderMenu />
    <router-view />
    <div class="elfsight-app-195e658a-b7c4-48bb-ac19-574ecfbd0255"></div>
    <FooterComponent />
</div>
</template>

<style>

:root {
    --main-color: #a5cd3a;
    --background-color: #064f56;
    --grey-color: #7f8281;
    --text-color: #ffffff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: "ubuntu";
}
</style>
