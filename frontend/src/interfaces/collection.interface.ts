export interface ICollection {
  id: number;
  name: string;
  type?: string;
  parent_id?: number | null
} 

export interface IOnClickCollection {
  (data?: ICollection, type?: string): void;
}

export interface ICollectionRaw {
  collections: any[],
  collection: any,
  created: boolean,
  updated: boolean
}

export interface IBookRaw {
  collections: any[],
  collection: any,
  created: boolean,
  updated: boolean
}

export interface IStateData{
  collection: ICollectionRaw,
  book: IBookRaw
}