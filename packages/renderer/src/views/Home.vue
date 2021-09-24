<template>
  <div class="bottom-nav-bar">
    <i
      class="iconfont"
      :class="navigationShow ? 'icon-forbid-2-line' : 'icon-checkbox-blank-circle-line'"
      @click="toggleNavigationShow"
    />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onActivated} from 'vue';
import {useStore} from '/@/store';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore();

    const navigationShow = computed(() => store.state.application.navigationShow);
    const toggleNavigationShow = () => store.commit('application/toggleNavigationShow');

    onActivated(() => {
      store.commit('application/setNavigationShow', false);
    });

    return {navigationShow, toggleNavigationShow};
  },
});
</script>

<style lang="scss" scoped>
.bottom-nav-bar {
  background: var(--background);
  height: 20px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;

  i {
    transition: color ease .3s;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    margin: 0 4px;

    &:hover {
      color: var(--main);
    }
  }
}
</style>
