<template>
  <div class="view-about">
    <el-scrollbar ref="scrollViewRef">
      <go-back-bar
        ref="goBackBarRef"
        class="go-back-bar"
      />
      <div class="about-application">
        <div>yyab</div>
        <h2>yyab</h2>
        <div>Learn English by English</div>
        <div>0.0.1</div>
      </div>
      <div
        v-if="Object.keys(versions).length"
        class="about-lib"
      >
        <h2 id="versions">
          Lib versions
        </h2>
        <div>
          <ul aria-labelledby="versions">
            <li
              v-for="(version, lib) in versions"
              :key="lib"
            >
              <strong>{{ lib }}</strong>: v{{ version }}
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
import {defineComponent} from 'vue';
import {useElectron} from '/@/use/electron';

export default defineComponent({
  name: 'About',
  components: {ElScrollbar, GoBackBar},
  setup() {
    const {versions} = useElectron() || [];
    // It makes no sense to make "versions" reactive
    return {versions};
  },
});
</script>

<style lang="scss" scoped>
.view-about {
  font-family: baloo_2regular, sans-serif;
  text-align: center;
}

.go-back-bar {
  margin: 16px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.about-application {
  margin: 16px;
  background: var(--background);
}

.about-lib {
  margin: 16px;
  background: var(--background);
}
</style>
