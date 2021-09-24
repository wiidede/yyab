import type { InjectionKey } from 'vue';
import type { Store } from 'vuex';
import { createStore, useStore as baseUseStore } from 'vuex';
import settings from './modules/settings';
import application from './modules/application';
import type {settingsState} from './modules/settings';
import type {applicationState} from './modules/application';

export interface State {
  version: string
  settings: settingsState
  application: applicationState
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return baseUseStore(key);
}

export const store = createStore({
  state: {
    version: '0.0.1',
  },
  modules: {
    settings,
    application,
  },
});
