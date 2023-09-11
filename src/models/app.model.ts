import { ModalProps } from 'components/modal/Modal';
import { ModalActionsProps } from 'components/modal/ModalActions';
import { ModalContentProps } from 'components/modal/ModalContent';
import { ModalHeaderProps } from 'components/modal/ModalHeader';
import { SidebarProps } from 'components/sidebar/Sidebar';
import { SidebarPushableProps } from 'components/sidebar/SidebarPushable';
import { SidebarPusherProps } from 'components/sidebar/SidebarPusher';
import { ReactElement } from 'react';

export interface DrawerProps {
  open: boolean;
  title?: string | ReactElement | ReactElement[];
  content?: ReactElement | ReactElement[];
  SidebarProps?: SidebarProps;
  SidebarPushableProps?: SidebarPushableProps;
  SidebarPusherProps?: SidebarPusherProps;
  onClose?: () => void;
}

export interface ConfirmModalProps {
  open: boolean;
  title?: string | ReactElement | ReactElement[];
  content?: string | ReactElement | ReactElement[];
  ModalProps?: ModalProps;
  ModalHeaderProps?: ModalHeaderProps;
  ModalContentProps?: ModalContentProps;
  ModalActionsProps?: ModalActionsProps;
  onClose?: () => void;
  onOk?: () => void;
}

// Define a type for the slice state
export interface AppStateModel {
  appLoading: boolean;
  rightModal: DrawerProps | null;
  confirmModal: ConfirmModalProps | null;
}
