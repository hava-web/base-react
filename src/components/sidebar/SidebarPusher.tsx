import React from 'react';
import {
  SidebarPusher as SUISidebarPusher,
  SidebarPusherProps as SUISidebarPusherProps,
} from 'semantic-ui-react';

export type SidebarPusherProps = SUISidebarPusherProps & {};

const SidebarPusher: React.FC<SidebarPusherProps> = ({ ...rest }) => (
  <SUISidebarPusher {...rest} />
);

export default SidebarPusher;
