<template>
  <div class="view-about">
    <el-scrollbar ref="scrollViewRef">
      <go-back-bar
        ref="goBackBarRef"
        class="go-back-bar"
      />
      <div class="about-item about-application">
        <div>yyab</div>
        <h2>yyab</h2>
        <div>Learn English by English</div>
        <div>{{ version }}</div>
      </div>
      <div class="about-item about-vite">
        <img
          alt="Vue logo"
          src="../../../assets/logo.svg"
          width="100"
        >
        <p>
          Powered by
          <a
            href="https://github.com/cawa-93/vite-electron-builder"
            rel="noopener"
            target="_blank"
          >vite-electron-builder</a>.
        </p>
      </div>
      <div
        v-if="Object.keys(libs).length"
        class="about-item about-lib"
      >
        <h2 id="versions">
          Lib versions
        </h2>
        <div>
          <ul aria-labelledby="libs">
            <li
              v-for="(libVersion, lib) in libs"
              :key="lib"
            >
              <strong>{{ lib }}</strong>: v{{ libVersion }}
            </li>
          </ul>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import {ElScrollbar} from 'element-plus';
import GoBackBar from '/@/components/GoBackBar.vue';
import {defineComponent, computed} from 'vue';
import {useElectron} from '/@/use/electron';
import {useStore} from '/@/store';

export default defineComponent({
  name: 'About',
  components: {ElScrollbar, GoBackBar},
  setup() {
    const store = useStore();
    let libs = {};
    if (useElectron()) {
      const {versions} = useElectron();
      libs = versions || {};
    }
    // It makes no sense to make "versions" reactive

    return {
      libs,
      version: computed(() => store.state.version),
    };
  },
});
</script>

<style lang="scss" scoped>
.view-about {
  height: 100%;
  font-family: baloo_2regular, sans-serif;
  text-align: center;
}

.go-back-bar {
  margin: 16px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.about-item {
  margin: 16px;
  background: var(--background);
  padding: 12px 0;
}
</style>
