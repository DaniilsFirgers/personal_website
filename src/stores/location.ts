import { defineStore } from "pinia";

export const useLocationStore = defineStore("url-location", {
  state: () => ({
    currentURL: `${window.location.pathname}`,
  }),
  actions: {
    updateCurrentURL() {
      this.currentURL = `${window.location.pathname}`;
    },
  },
});
