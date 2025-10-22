import { StateCreator } from 'zustand';
import { RecordType } from '@/types/common.type';
import { IPageSliceState, IPageSliceAction } from './types';

export interface IPageSlice extends IPageSliceState, IPageSliceAction {}

const initialState: IPageSliceState = {
  pathname: '',
  id: 0,
  uuid: '',
  q: '',
  context: {},
};

export const pageSlice: StateCreator<IPageSlice> = (set) => ({
  ...initialState,
 
  resetPageSlice: (payload?: IPageSliceState) => set({ ...payload ?? initialState }),
  
  setPathname: (payload: string) => set({ pathname: payload }),
 
  setId: (payload: number) => set({ id: payload }),
 
  setUuid: (payload: string) => set({ uuid: payload }),
 
  setQ: (payload: string) => set({ q: payload }),

  resetContext: (payload?: RecordType) => set({ context: payload ?? {} }),  

  setContext: (payload: Partial<RecordType>) => set((state) => ({ context: { ...state.context, ...payload } })),  
});