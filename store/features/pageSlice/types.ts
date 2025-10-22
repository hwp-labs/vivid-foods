import { RecordType } from "@/types/common.type";

export interface IPageSliceState {
  pathname: string;
  id: number;
  uuid: string;
  q: string;
  context: RecordType;
}

export interface IPageSliceAction {
  resetPageSlice: () => void;
  setPathname: (payload: string) => void;
  setId: (payload: number) => void;
  setUuid: (payload: string) => void;
  setQ: (payload: string) => void;
  resetContext: (payload?: RecordType) => void;
  setContext: (payload: Partial<RecordType>) => void;
}