import React from 'react';
import {
  SidebarPushable as SUISidebarPushable,
  SidebarPushableProps as SUISidebarPushableProps,
} from 'semantic-ui-react';

export type SidebarPushableProps = SUISidebarPushableProps & {};

const SidebarPushable: React.FC<SidebarPushableProps> = ({
  options = [],
  ...rest
}) => <SUISidebarPushable search selection options={options} {...rest} />;

export default SidebarPushable;
