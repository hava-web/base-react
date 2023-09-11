import React from 'react';
import {
  ModalHeader as SUIModalHeader,
  ModalHeaderProps as SUIModalHeaderProps,
} from 'semantic-ui-react';

export type ModalHeaderProps = SUIModalHeaderProps & {};

const ModalHeader: React.FC<ModalHeaderProps> = ({ ...rest }) => (
  <SUIModalHeader {...rest} />
);

export default ModalHeader;
