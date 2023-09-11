import React from 'react';
import {
  FormField as SUIFormField,
  FormFieldProps as SUIFormFieldProps,
} from 'semantic-ui-react';

export type FormFieldProps = SUIFormFieldProps & {};

const FormField: React.FC<FormFieldProps> = ({ ...rest }) => (
  <SUIFormField {...rest} />
);

export default FormField;
