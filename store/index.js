export const state = () => ({
  theme: "lightblue",
});

export const mutations = {
  SET_THEME(state, payload) {
    state.theme = payload;
  },
};

export const actions = {
  setTheme(state, payload) {
    state.commit("SET_THEME", payload);
  },
};

export const getters = {
  getterTheme: (state) => state.theme,
};
