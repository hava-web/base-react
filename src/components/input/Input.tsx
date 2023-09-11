import React, { FC } from 'react';
import cx from 'classnames';
import {
  Input as SUIInput,
  InputProps as SUIInputProps,
} from 'semantic-ui-react';
import './input.css';

export type Props = SUIInputProps & {
  isError?: boolean;
};

const Input: FC<Props> = ({ className, ...rest }) => (
  <SUIInput
    {...rest}
    className={cx(
      'pb-input',
      {
        'pb-input-disabled': !!rest?.disabled,
        'pb-input-error': !!rest?.isError,
      },
      'text-pb-h1',
      className,
    )}
  />
);

export default Input;
