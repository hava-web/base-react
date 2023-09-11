import React from 'react';
import { Menu as SUIMenu, MenuProps as SUIMenuProps } from 'semantic-ui-react';

export type MenuProps = SUIMenuProps & {};

const Menu: React.FC<MenuProps> = ({ ...rest }) => <SUIMenu {...rest} />;

export default Menu;
