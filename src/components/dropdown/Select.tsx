import React from 'react';
import {
  Dropdown as SUIDropdown,
  DropdownProps as SUIDropdownProps,
} from 'semantic-ui-react';

export type SelectProps = SUIDropdownProps & {};

const Select: React.FC<SelectProps> = ({ options = [], ...rest }) => (
  <SUIDropdown clearable search selection options={options} {...rest} />
);

export default Select;
