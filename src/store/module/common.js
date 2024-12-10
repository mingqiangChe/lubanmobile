const state = () => ({
  distanceStatus: false, //距离
  controlTop: false, //重置屏幕top为0
  loadingCounter: 0,
  loading: false,
  distance: 0, //滚动距离
});

// getters
const getters = {
  isLoading: (state) => state.loading,
  nowDistance: (state) => state.distance,
};

// actions
const actions = {};

// mutations
const mutations = {
  distanceStatusChange(state, v) {
    state.distanceStatus = v;
  },
  controlTopChange(state, v) {
    state.controlTop = v;
  },
  START_LOADING(state) {
    state.loadingCounter++;
    state.loading = true;
  },
  STOP_LOADING(state) {
    if (state.loadingCounter > 0) {
      state.loadingCounter--;
    }
    state.loading = state.loadingCounter > 0;
  },
  START_DISTANCE(state, v) {
    state.distance = v;
  },
};

export default {
  namespaced: true, // 使用命名空间  store.commit('common/START_LOADING');
  state,
  getters,
  actions,
  mutations,
};
