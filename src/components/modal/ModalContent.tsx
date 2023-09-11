import React from 'react';
import {
  ModalContent as SUIModalContent,
  ModalContentProps as SUIModalContentProps,
} from 'semantic-ui-react';

export type ModalContentProps = SUIModalContentProps & {};

const Select: React.FC<ModalContentProps> = ({ options = [], ...rest }) => (
  <SUIModalContent search selection options={options} {...rest} />
);

export default Select;
