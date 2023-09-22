import React from 'react';
import { Link } from 'react-router-dom';
import {
  MenuItem as SUIMenuItem,
  MenuItemProps as SUIMenuItemProps,
} from 'semantic-ui-react';

export type MenuItemProps = SUIMenuItemProps & {
  cursor?: boolean;
  path?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  cursor,
  path,
  children,
  ...rest
}) => {
  if (path) {
    return (
      <Link to={path}>
        <SUIMenuItem {...rest} className={cursor ? 'cursor' : ''}>
          {children}
        </SUIMenuItem>
      </Link>
    );
  }

  return (
    <SUIMenuItem {...rest} className={cursor ? 'cursor' : ''}>
      {children}
    </SUIMenuItem>
  );
};

export default MenuItem;
