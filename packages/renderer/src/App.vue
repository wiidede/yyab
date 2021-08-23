<template>
  <app-navigation />
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AppNavigation from '/@/components/AppNavigation.vue';
export default defineComponent({
  name: 'App',
  components: {
    AppNavigation,
  },
});
</script>

<style lang="scss">
@import "./style/index";

html {
  overflow: hidden;
}

body {
  margin: 0;
  background: var(--background);
  transition: all ease .3s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
  transition: color ease .3s;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  & > main {
    flex: 1;
    background: var(--background-gray);
    transition: all ease .3s;
    height: 100%;
    overflow: hidden;

    & > div {
      height: 100vh;
    }
  }
}
</style>
