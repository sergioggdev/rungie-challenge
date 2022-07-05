import { Card, GridArea, TouchableComponent } from './selectable-grid.styled';
import useSelectableGrid from './selectable-grid.hook';
import { Props } from './selectable-grid.type';

export const SelectableGrid = ({ rows = 5, columns = 5 }: Props) => {
  const {
    const: {},
    state: { grids, maxSize },
    actions: { handleEvents },
  } = useSelectableGrid({ rows, columns });

  return (
    <Card maxSize={maxSize} className="card-area">
      <GridArea rows={rows} columns={columns} className="grid-area">
        {grids.map(props => (
          <TouchableComponent
            {...props}
            {...handleEvents}
            draggable={false}
            key={props.id}
            className="grid-element"
          />
        ))}
      </GridArea>
    </Card>
  );
};
