import React from 'react';
import {
  GridColumn as SUIGridColumn,
  GridColumnProps as SUIGridColumnProps,
} from 'semantic-ui-react';

export type GridColumnProps = SUIGridColumnProps & {};

const GridColumn: React.FC<GridColumnProps> = ({ ...rest }) => (
  <SUIGridColumn {...rest} />
);

export default GridColumn;
