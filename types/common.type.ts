export type ListType<T = number> = T[]

export type RecordType<T extends string | number = string> = Record<T, unknown>

export type OptionType<T = RecordType> = {
  value: string,
  label: string,
  disabled?: boolean,
  item?: T,
}

export type CollectionType<T = RecordType> = T[]

export type DateType = Date | null

export type DateStrType = Date | string | null