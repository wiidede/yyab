<template>
  <div class="comp-go-back">
    <div>
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
  background: var(--background);
  width: 100%;
  height: 40px;

  & > div {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}

span {

  padding: 0 12px;
}
</style>
