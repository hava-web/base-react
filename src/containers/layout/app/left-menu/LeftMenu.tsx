import React from 'react';
import MenuItem from 'components/menu/MenuItem';
import Menu from 'components/menu/Menu';
import { AppRouteConst } from 'constants/route.const';
import './left-menu.css';
import { Popup } from 'semantic-ui-react';

const menus = [
  {
    path: AppRouteConst.DASHBOARD,
    icon: 'dashboard',
    tooltip: 'Dashboard',
  },
  {
    path: AppRouteConst.TODO,
    icon: 'list',
    tooltip: 'Todo List',
  },
  {
    path: AppRouteConst.USERS,
    icon: 'users',
    tooltip: 'Users',
  },
];

export default function LeftMenu() {
  return (
    <ul className="left-menu">
      <Menu vertical={true} fluid={true} className="menu-list">
        {menus.map((item, index) => (
          <Popup
            content={item.tooltip}
            position="right center"
            key={index}
            trigger={
              <MenuItem
                menuColor
                icon={item.icon}
                link={true}
                path={item.path}
              />
            }
          />
        ))}
      </Menu>
    </ul>
  );
}
