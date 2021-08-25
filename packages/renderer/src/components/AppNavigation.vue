<template>
  <nav :class="{collapse: isCollapse}">
    <div
      v-for="(nav, index) in navs"
      :key="`nav${index}`"
      class="nav-item"
      :class="{active: nav.active}"
      @click="navTo(nav.path)"
    >
      <span
        class="iconfont"
        :class="nav.active ? nav.iconActive : nav.icon"
      />
      <span v-show="!isCollapse">{{ nav.name }}</span>
    </div>
    <div
      class="collapse-button"
      @click="handleCollapse"
    >
      <span
        class="iconfont"
        :class="isCollapse ? 'icon-arrow-right-s-line' : 'icon-arrow-left-s-line'"
      />
      <span v-show="!isCollapse">collapse</span>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent, ref, reactive, watchEffect} from 'vue';
import {useRouter} from 'vue-router';
import {navTo} from '/@/use/utils';

export default defineComponent({
  name: 'AppNavigation',
  setup() {
    let isCollapse = ref(false);
    const navs = reactive([
      {name: 'Home', path: '/', active: false, icon: 'icon-home-line', iconActive: 'icon-home-fill'},
      {name: 'Lexicon', path: '/lexicon', active: false, icon: 'icon-book-line', iconActive: 'icon-book-fill'},
      {name: 'Settings', path: '/settings', active: false, icon: 'icon-settings-line', iconActive: 'icon-settings-fill'},
    ]);
    const handleCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };

    const router = useRouter();
    watchEffect(() => {
      navs.forEach(nav => {
        nav.active = nav.path === '/' ?
          router.currentRoute.value.path === nav.path :
          router.currentRoute.value.path.startsWith(nav.path);
      });
    });

    return {isCollapse, navs, handleCollapse, navTo};
  },
});
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 120px;
  transition: width ease .3s;
  font-family: baloo_2regular, sans-serif;
  user-select: none;

  .nav-item {
    display: inline-flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    transition: background-color ease .3s, color ease .3s;
    padding: 8px 0;

    &:hover {
      background: var(--hover);
      color: var(--main);
    }

    .iconfont {
      font-size: 26px;
      margin: 0 8px;
    }

    &.active {
      color: var(--main);
    }
  }

  .collapse-button {
    margin: auto 0 8px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: color ease .3s;

    &:hover {
      color: var(--main);
    }

    .iconfont {
      font-size: 20px;
      margin: 0 11px;
    }
  }

  &.collapse {
    width: 42px;
  }
}
</style>
