import { defineStore } from "pinia";

const useLayoutStore = defineStore("Layout", () => {
  const isFold = false;
  const isRefresh = false;

  return { isFold, isRefresh };
});

export default useLayoutStore;
