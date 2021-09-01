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
      <el-color-picker
        :model-value="colorActive"
        popper-class="setting-color-picker-popper"
        :size="colorList.includes(colorActive) ? 'mini' : 'small'"
        @active-change="setColor($event)"
      />
      <div
        v-for="(color, index) in colorList"
        :key="`color-${String(index)}`"
        class="color"
        :class="{active: color === colorActive}"
        :style="{background: color}"
        @click="setColor(color)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import type {themeMap} from '../../../types/settings';
import {defineComponent, ref, reactive, watchEffect, computed} from 'vue';
import {ElRadioButton, ElRadioGroup, ElColorPicker} from 'element-plus';
import {useStore} from '/@/store';

export default defineComponent({
  name: 'Appearance',
  components: {ElRadioButton, ElRadioGroup, ElColorPicker},
  setup() {
    const store = useStore();

    const theme = ref('Light');

    // change highlight color
    const colorActive = computed(() => store.state.settings.color);
    const colorCustom = ref(colorActive.value);
    const colorList = reactive(['#FF9A76', '#FF9292', '#42B983', '#7579E7', '#19D3DA', '#056676', '#835858']);
    const setColor = (color: string): void => store.commit('settings/setColor', color);
    watchEffect(() => {
      const color = colorActive.value;
      console.log(color);
      document.documentElement.style.setProperty('--main', color);
      document.documentElement.style.setProperty('--select', `${color}60`);
      document.documentElement.style.setProperty('--hover', `${color}20`);
    });

    // change theme
    const changeTheme = (theme: string) => {
      document.documentElement.setAttribute('data-theme', theme);
    };
    const themeMap: themeMap = {
      'Light': 'light',
      'Dark': 'dark',
    };
    // listen media query : prefers-color-scheme
    const mediaQueryListDark = window.matchMedia('(prefers-color-scheme: dark)');
    // system theme change handler
    const handleColorSchemeChange = (evt: MediaQueryList | MediaQueryListEvent): void => {
      if (evt.matches) {
        // system dark theme
        changeTheme('dark');
      } else {
        // system light theme
        changeTheme('light');
      }
    };

    watchEffect(async () => {
      if (theme.value === 'Follow System') {
        await window.darkMode.system();
        handleColorSchemeChange(mediaQueryListDark);
        mediaQueryListDark.addEventListener('change', handleColorSchemeChange);
      } else {
        const themeValue = themeMap[theme.value];
        changeTheme(themeValue);
        await window.darkMode[themeValue]();
        mediaQueryListDark.removeEventListener('change', handleColorSchemeChange);
      }
    });

    return {theme, colorActive, colorList, colorCustom, setColor};
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
  transition: width ease .3s, height ease .3s;

  &.active {
    width: 32px;
    height: 32px;
  }
}

.color-list {
  &:deep(.el-color-picker) {
    margin: 0 8px;
    transition: width ease .3s, height ease .3s;

    &.el-color-picker--mini {
      height: 24px;

      .el-color-picker__trigger {
        height: 24px;
        width: 24px;
      }
    }

    .el-color-picker__trigger {
      transition: width ease .3s, height ease .3s;
      padding: 0;
      border: 0;
    }

    .el-color-picker__color {
      border: 0;
    }

    .el-color-picker__color-inner {
      border-radius: 50%;
    }
  }
}
</style>

<style lang="scss">
.setting-color-picker-popper {
  .el-color-dropdown__btns {
    .el-color-dropdown__link-btn {
      display: none;
    }
  }
}
</style>
