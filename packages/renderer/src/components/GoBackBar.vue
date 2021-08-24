<template>
  <div class="comp-go-back">
    <div @click="goBack">
      <span class="iconfont icon-arrow-left-s-line" />
      <span>Back</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {goBack} from '/@/use/utils';

export default defineComponent({
  name: 'AppNavigation',
  setup() {

    return {goBack};
  },
});
</script>

<style lang="scss" scoped>
.comp-go-back {
  font-family: baloo_2regular, sans-serif;
  text-align: initial;
  background: var(--background);
  box-sizing: border-box;
  height: 40px;

  & > div {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 100%;
    padding-left: 12px;

    &:hover {
      color: var(--main);
    }
  }
}

span {
  padding-right: 12px;
}
</style>
