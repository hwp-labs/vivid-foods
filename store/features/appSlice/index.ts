import { APP } from "@/constants/APP";
import { persist } from "zustand/middleware";

interface IUser {
  name?: string;
  email?: string;
  role?: string;
  tenantName?: string;
}

interface IJob {
  title: string;
  description?: string;
}

interface IAppSliceState {
  user: IUser;
  jobs: Record<string, IJob>;
}

interface IAppSliceAction {
  resetAppSlice: () => void;
  setUser: (payload: IUser) => void;
  resetJobs: () => void;
  addJob: (name: string, job: IJob) => void;
  removeJob: (name: string) => void;
}

export interface IAppSlice extends IAppSliceState, IAppSliceAction { }

const initialState: IAppSliceState = {
  user: {},
  jobs: {},
};

export const appSlice = persist<IAppSlice>(
  (set, get) => ({
    ...initialState,

    resetAppSlice: () => set({ ...initialState }),

    setUser: (payload: IUser) =>
      set((state) => ({
        user: state.user ? { ...state.user, ...payload } : ({ ...payload }),
      })),

    resetJobs: () => set({ jobs: {} }),

    addJob: (name: string, job: IJob) =>
      set((state) => ({
        jobs: state.jobs
          ? { ...state.jobs, [name]: job }
          : { [name]: job },
      })),

    removeJob: (name: string) =>
      set((state) => {
        const filteredJobs: Record<string, IJob> = {}

        Object.entries(state.jobs ?? {}).map(([key, value]) => {
          if (key !== name) {
            filteredJobs[key] = value;
          }
        });

        return { jobs: filteredJobs };
      }),
  }),
  {
    name: APP.localStorageKey,
    partialize: (state) =>
      ({
        user: state.user,
        jobs: state.jobs,
      }) as IAppSlice,
  }
);
