import React from 'react';
import { Form as SUIForm, FormProps as SUIFormProps } from 'semantic-ui-react';

export type FormProps = SUIFormProps & {};

const Form: React.FC<FormProps> = ({ ...rest }) => <SUIForm {...rest} />;

export default Form;
