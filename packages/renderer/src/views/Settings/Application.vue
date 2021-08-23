<template>
  <div
    class="setting-item setting-go"
    @click="navTo('/settings/about')"
  >
    <span>About</span>
    <div class="setting-item-placeholder iconfont icon-arrow-right-s-line" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {navTo} from '/@/use/utils';

export default defineComponent({
  name: 'Application',
  setup() {
    return {navTo};
  },
});
</script>

<style lang="scss" scoped>
.color-list {
  display: flex;
  align-items: center;
}

.color {
  width: 24px;
  height: 24px;
  border-radius: 100%;
  cursor: pointer;
  margin: 0 8px;
  transition: all ease .3s;

  &.active {
    width: 32px;
    height: 32px;
  }
}
</style>
