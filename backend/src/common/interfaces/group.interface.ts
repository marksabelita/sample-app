export interface GroupedData {
  id: number;
  name: string;
  parent_id?: number;
  children?: GroupedData[];
}
