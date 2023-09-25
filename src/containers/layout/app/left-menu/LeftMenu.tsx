import React from 'react';
import MenuItem from 'components/menu/MenuItem';
import Menu from 'components/menu/Menu';
import { AppRouteConst } from 'constants/route.const';
import './left-menu.css';

const menus = [
  {
    path: AppRouteConst.DASHBOARD,
    icon: 'dashboard',
  },
  {
    path: AppRouteConst.TODO,
    icon: 'list',
  },
  {
    path: AppRouteConst.USERS,
    icon: 'users',
  },
];

export default function LeftMenu() {
  return (
    <ul className="left-menu">
      <Menu vertical={true} fluid={true}>
        {menus.map((item, index) => (
          <MenuItem
            className="menu-item"
            menuColor={true}
            key={index}
            icon={item.icon}
            link={true}
            path={item.path}
          />
        ))}
      </Menu>
    </ul>
  );
}
