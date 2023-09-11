import React from 'react';
import {
  DropdownItem as SUIDropdownItem,
  DropdownItemProps as SUIDropdownItemProps,
} from 'semantic-ui-react';

export type DropdownItemProps = SUIDropdownItemProps & {};

const DropdownItem: React.FC<DropdownItemProps> = ({ ...rest }) => (
  <SUIDropdownItem {...rest} />
);

export default DropdownItem;
