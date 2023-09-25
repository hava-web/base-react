import { omit } from 'lodash';
import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import {
  MenuItem as SUIMenuItem,
  MenuItemProps as SUIMenuItemProps,
} from 'semantic-ui-react';
import './Menu.css';

export type MenuItemProps = SUIMenuItemProps & {
  cursor?: boolean;
  path?: string;
  menuColor?: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({
  cursor,
  path,
  children,
  menuColor,
  className,
  ...rest
}) => {
  console.log('ttt in class', rest?.className);
  if (path) {
    return (
      <Link to={path} className="link-item">
        <SUIMenuItem
          {...rest}
          className={cx('menu-item', {
            'pb-menu-color': menuColor,
          })}
        >
          {children}
        </SUIMenuItem>
      </Link>
    );
  }

  return (
    <SUIMenuItem
      {...rest}
      className={cx('menu-item', {
        'pb-menu-color': menuColor,
      })}
    >
      {children}
    </SUIMenuItem>
  );
};

export default MenuItem;
