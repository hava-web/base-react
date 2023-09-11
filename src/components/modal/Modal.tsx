import React from 'react';
import {
  Modal as SUIModal,
  ModalProps as SUIModalProps,
} from 'semantic-ui-react';

export type ModalProps = SUIModalProps & {};

const Modal: React.FC<ModalProps> = ({ ...rest }) => <SUIModal {...rest} />;

export default Modal;
