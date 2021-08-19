<template>
  <div class="view-settings">
    <el-scrollbar>
      <h1>Settings</h1>
      <div class="setting-part">
        <h4>Appearance</h4>
        <Appearance />
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import Appearance from './Appearance.vue';

export default defineComponent({
  name: 'Settings',
  components: {
    Appearance,
  },
});
</script>

<style lang="scss" scoped>
.view-settings {
  padding: 12px;
  box-sizing: border-box;
  min-height: 100vh;
}

.setting-part {
  background: var(--background);
  display: flex;
  flex-direction: column;

  h4 {
    padding: 0 16px;
  }
}
</style>
