export interface applicationState {
  navigationShow: boolean
}

// initial state
const state = (): applicationState => ({
  navigationShow: true,
});

// getters
const getters = {

};

// actions
const actions = {

};

// mutations
const mutations = {
  setNavigationShow(state: applicationState, navigationShow: boolean): void {
    state.navigationShow = navigationShow;
  },
  toggleNavigationShow(state: applicationState): void {
    state.navigationShow = !state.navigationShow;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
