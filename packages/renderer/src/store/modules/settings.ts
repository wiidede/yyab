export interface settingsState {
  theme: string,
  color: string,
}

// initial state
const state = (): settingsState => ({
  theme: 'light',
  color: '#FF9A76',
});

// getters
const getters = {

};

// actions
const actions = {

};

// mutations
const mutations = {
  setColor(state: settingsState, color: string): void {
    state.color = color;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
