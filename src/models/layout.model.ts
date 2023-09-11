import { ReactElement } from 'react';

export interface MenuItemTypes {
  id?: number;
  icon?: ReactElement | string;
  title: string;
  path: string;
  to: string;
  children?: MenuItemTypes[];
}

export type BreadCrumbItemTypes = {
  path: string;
  name: string;
  children?: BreadCrumbItemTypes[];
  isHidden?: boolean;
};
