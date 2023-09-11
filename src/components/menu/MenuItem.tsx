import React from 'react';
import {
  MenuItem as SUIMenuItem,
  MenuItemProps as SUIMenuItemProps,
} from 'semantic-ui-react';

export type MenuItemProps = SUIMenuItemProps & {};

const MenuItem: React.FC<MenuItemProps> = ({ ...rest }) => (
  <SUIMenuItem {...rest} />
);

export default MenuItem;
