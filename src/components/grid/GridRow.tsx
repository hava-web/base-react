import React from 'react';
import {
  GridRow as SUIGridRow,
  GridRowProps as SUIGridRowProps,
} from 'semantic-ui-react';

export type GridRowProps = SUIGridRowProps & {};

const GridRow: React.FC<GridRowProps> = ({ ...rest }) => (
  <SUIGridRow {...rest} />
);

export default GridRow;
