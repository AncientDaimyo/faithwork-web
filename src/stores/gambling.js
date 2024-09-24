import { defineStore } from 'pinia';

export const useGamblingStore = defineStore('gambling', {
  state: () => ({
    showCardIcon: localStorage.getItem('showCardIcon') === 'true' || false,
  }),
  actions: {
    setShowCardIcon(value) {
      this.showCardIcon = value;
      localStorage.setItem('showCardIcon', value.toString());
    },
  },
});