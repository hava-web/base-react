import React from 'react';
import {
  Sidebar as SUISidebar,
  SidebarProps as SUISidebarProps,
} from 'semantic-ui-react';

export type SidebarProps = SUISidebarProps & {};

const Sidebar: React.FC<SidebarProps> = ({ ...rest }) => (
  <SUISidebar {...rest} />
);

export default Sidebar;
