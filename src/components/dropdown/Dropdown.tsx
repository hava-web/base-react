import React from 'react';
import {
  Dropdown as SUIDropdown,
  DropdownProps as SUIDropdownProps,
} from 'semantic-ui-react';

export type DropdownProps = SUIDropdownProps & {};

const Dropdown: React.FC<DropdownProps> = ({ ...rest }) => (
  <SUIDropdown {...rest} />
);

export default Dropdown;
