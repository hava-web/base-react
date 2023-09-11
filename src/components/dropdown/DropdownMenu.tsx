import React from 'react';
import {
  DropdownMenu as SUIDropdownMenu,
  DropdownMenuProps as SUIDropdownMenuProps,
} from 'semantic-ui-react';

export type DropdownMenuProps = SUIDropdownMenuProps & {};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ ...rest }) => (
  <SUIDropdownMenu {...rest} />
);

export default DropdownMenu;
