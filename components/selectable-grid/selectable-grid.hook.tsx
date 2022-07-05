import { useEffect, useState, SyntheticEvent } from 'react';
import { useMouseEvents, useWindowDimensions, useGeneral } from '@Hooks';
import { TouchableGridType } from '@Types';

import { HookProps, SelectedGridType } from './selectable-grid.type';
import { buildNewGrid } from './helpers/build-new-grid';

const useCustomHook = ({ rows, columns }: HookProps) => {
  const [selectedGrid, setselectedGrid] = useState<SelectedGridType>(null);
  const [grids, setGrids] = useState<TouchableGridType[]>(buildNewGrid({ rows, columns }));
  const { width, height } = useWindowDimensions();

  const {
    actions: { useSendAnalyticGenerator },
  } = useGeneral();
  const { data, sendAnalytics } = useSendAnalyticGenerator();

  useEffect(() => {
    if (grids) sendAnalytics(grids);
  }, [grids]);

  const handleEvents = useMouseEvents({
    onClick: (e: SyntheticEvent<HTMLDivElement>) => {
      setGrids(
        grids.map(props => ({
          ...props,
          ...(props.id === e.currentTarget.id && { enable: !props.enable }),
        })),
      );
    },

    onDoubleClick: (e: SyntheticEvent<HTMLDivElement>) => {
      const selected = grids.find(({ id }) => id === e.currentTarget.id);

      setGrids(
        grids.map(props => ({
          ...props,
          ...(props.column === selected?.column && { enable: selected.enable }),
        })),
      );
    },

    onLongPressDelay: 600,
    onLongPress: (e: SyntheticEvent<HTMLDivElement>) => {
      const selected = grids.find(({ id }) => id === e.currentTarget.id);
      if (!selected) throw 'error in grid select';
      setselectedGrid({
        gridEnable: selected.enable,
        affectedId: [selected.id],
      });

      setGrids(
        grids.map(props => ({
          ...props,
          ...(props.id === selected?.id && { selected: true }),
        })),
      );
    },

    onMouseEnter: (e: SyntheticEvent<HTMLDivElement>) => {
      if (selectedGrid) {
        setselectedGrid({
          ...selectedGrid,
          affectedId: [...selectedGrid.affectedId, e.currentTarget.id],
        });
        setGrids(
          grids.map(props => ({
            ...props,
            ...(props.id === e.currentTarget.id && { selected: true }),
          })),
        );
      }
    },

    onMouseUp: (e: SyntheticEvent<HTMLDivElement>) => {
      setselectedGrid(null);
      setGrids(
        grids.map(props => ({
          ...props,
          selected: false,
          ...(selectedGrid?.affectedId.some(affectedId => affectedId === props.id) && {
            enable: selectedGrid.gridEnable,
          }),
        })),
      );
    },
  });

  const maxSize = height > width ? width : height;

  return {
    const: {},
    state: { grids, maxSize: maxSize - 100 },
    actions: { handleEvents },
  };
};

export default useCustomHook;
