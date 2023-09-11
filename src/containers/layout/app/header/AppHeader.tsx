import React, { FC, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import funLogoImg from 'assets/images/fun_logo.png';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'store/store-hooks';
import { logoutAction } from 'store/features/auth/authSlice';
import { I18nNamespace } from 'constants/i18n.const';
import { AppRouteConst, AuthRouteConst } from 'constants/route.const';
import Menu from 'components/menu/Menu';
import MenuItem from 'components/menu/MenuItem';
import Dropdown from 'components/dropdown/Dropdown';
import DropdownMenu from 'components/dropdown/DropdownMenu';
import DropdownItem from 'components/dropdown/DropdownItem';
import MenuMenu from 'components/menu/MenuMenu';
import Image from 'components/image/Image';
import './app-header.css';

interface AppHeaderProps {}

const AppHeader: FC<AppHeaderProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation(I18nNamespace.COMMON);

  const handleLogout = useCallback(() => {
    dispatch(logoutAction());
    navigate(AuthRouteConst.LOGIN);
  }, [dispatch, navigate]);

  return (
    <header>
      <Menu attached="top">
        <MenuItem as="a" header className="logo-wrapper">
          <NavLink to={AppRouteConst.HOME} className="logo-link">
            <Image size="mini" src={funLogoImg} />
          </NavLink>
        </MenuItem>

        <MenuMenu position="right">
          <Dropdown item simple text="Hello Liam!">
            <DropdownMenu>
              <DropdownItem>{t('layout.profile')}</DropdownItem>
              <DropdownItem>{t('layout.language')}</DropdownItem>
              <DropdownItem onClick={handleLogout}>
                {t('layout.logout')}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </MenuMenu>
      </Menu>
    </header>
  );
};

export default AppHeader;
