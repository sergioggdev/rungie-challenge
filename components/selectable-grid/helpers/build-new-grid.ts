type Params = {
  rows: number;
  columns: number;
};

export const buildNewGrid = ({ rows, columns }: Params) => {
  let columnCount = 0;

  return Array(rows * columns)
    .fill({ enable: false })
    .map((props, index) => {
      columnCount >= columns ? (columnCount = 1) : columnCount++;
      return {
        id: `custom-id${index}`,
        row: 1 + Math.floor(index / columns),
        column: columnCount,
        ...props,
      };
    });
};
