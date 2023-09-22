import React, { FC } from 'react';
import {
  Button as SUIButton,
  ButtonProps as SUIButtonProps,
} from 'semantic-ui-react';
import cx from 'classnames';
import './button.css';

export type Props = SUIButtonProps & {
  colorWhite?: boolean;
  margin?: boolean;
};

const Button: FC<Props> = ({ className, margin, colorWhite, ...rest }) => (
  <SUIButton
    {...rest}
    className={cx(
      'pb-button',
      {
        'pb-button-white': colorWhite,
        'pb-button-disabled': !!rest?.disabled,
        'pb-button-margin': margin,
      },
      className,
    )}
  />
);

export default Button;
