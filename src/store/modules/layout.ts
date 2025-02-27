import { defineStore } from "pinia";

const useLayoutStore = defineStore("Layout", () => {
  const isFold = false;

  return { isFold };
});

export default useLayoutStore;
