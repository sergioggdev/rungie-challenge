export type Props = {
  rows?: number;
  columns?: number;
};

export type HookProps = {
  rows: number;
  columns: number;
};

export type SelectedGridType = {
  gridEnable: boolean;
  affectedId: string[];
} | null;
