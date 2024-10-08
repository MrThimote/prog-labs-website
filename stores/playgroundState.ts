import { defineStore } from 'pinia';

export interface PlaygroundState {
  exercisePath: string | undefined;
  writtenCode: string | undefined;
}

export const usePlaygroundStateStore = defineStore({
  id: 'playgroundState',
  persist: {
    storage: persistedState.localStorage,
  },
  state: (): PlaygroundState => ({
    exercisePath: undefined,
    writtenCode: undefined,
  }),
  actions: {
    setCurrentExercisePath(path: string | undefined) {
      this.exercisePath = path;
    },
    setWrittenCode(code: string | undefined) {
      this.writtenCode = code;
    },
  },
});
