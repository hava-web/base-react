import React from 'react';
import { Grid as SUIGrid, GridProps as SUIGridProps } from 'semantic-ui-react';

export type GridProps = SUIGridProps & {};

const Grid: React.FC<GridProps> = ({ ...rest }) => <SUIGrid {...rest} />;

export default Grid;
