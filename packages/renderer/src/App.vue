<template>
  <app-navigation />
  <el-scrollbar>
    <router-view />
  </el-scrollbar>
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
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;

  & > nav {

  }

  & > .el-scrollbar {
    flex: 1;
  }
}
</style>
