import React, { FC } from 'react';
import {
  Button as SUIButton,
  ButtonProps as SUIButtonProps,
} from 'semantic-ui-react';
import cx from 'classnames';
import './button.css';

export type Props = SUIButtonProps & {};

const Button: FC<Props> = ({ className, ...rest }) => (
  <SUIButton
    {...rest}
    className={cx(
      'pb-button',
      {
        'pb-button-disabled': !!rest?.disabled,
      },
      className,
    )}
  />
);

export default Button;
