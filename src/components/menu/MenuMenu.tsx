import React from 'react';
import {
  MenuMenu as SUIMenuMenu,
  MenuMenuProps as SUIMenuMenuProps,
} from 'semantic-ui-react';

export type MenuMenuProps = SUIMenuMenuProps & {};

const MenuMenu: React.FC<MenuMenuProps> = ({ ...rest }) => (
  <SUIMenuMenu {...rest} />
);

export default MenuMenu;
