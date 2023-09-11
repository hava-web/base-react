import React from 'react';
import {
  ModalActions as SUIModalActions,
  ModalActionsProps as SUIModalActionsProps,
} from 'semantic-ui-react';

export type ModalActionsProps = SUIModalActionsProps & {};

const ModalActions: React.FC<ModalActionsProps> = ({ ...rest }) => (
  <SUIModalActions {...rest} />
);

export default ModalActions;
