<template>
  <div class="setting-item">
    <span>Theme</span>
    <el-radio-group
      v-model="theme"
      size="mini"
    >
      <el-radio-button label="Light" />
      <el-radio-button label="Dark" />
      <el-radio-button label="Follow System" />
    </el-radio-group>
  </div>
  <div class="setting-item">
    <span>Color</span>
    <div class="color-list">
      <div
        v-for="(color, index) in colorList"
        :key="`color-${String(index)}`"
        class="color"
        :class="{active: color === colorActive}"
        :style="{background: color}"
        @click="changeColor(color)"
      />
    </div>
  </div>
</template>

<script>
import {defineComponent, ref, reactive, watchEffect} from 'vue';

export default defineComponent({
  name: 'Appearance',
  setup() {
    const theme = ref('Light');
    let systemDefaultTheme = 'light';
    const colorActive = ref('#FF9A76');
    const colorList = reactive(['#FF9A76', '#FF9292', '#42b983', '#7579E7', '#19D3DA', '#056676', '#835858']);
    //const customColor = ref('');
    const changeColor = (color) => {
      colorActive.value = color;
      document.documentElement.style.setProperty('--main', color);
      document.documentElement.style.setProperty('--hover', `${color}20`);
    };
    const changeTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
    };
    const themeMap = {
      'Light': 'light',
      'Dark': 'dark',
      'Follow System': systemDefaultTheme,
    };
    watchEffect(() => {
      changeTheme(themeMap[theme.value]);
    });
    return {theme, colorActive, colorList, changeColor};
  },
});
</script>

<style lang="scss" scoped>
.setting-item {
  padding: 0 16px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: var(--hover);
  }

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
}
</style>
