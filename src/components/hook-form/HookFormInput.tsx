import React, { FC, memo, useId, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import FormField, { FormFieldProps } from 'components/form/FormField';
import Input, { Props as InputProps } from '../input/Input';
import './hook-form.css';

export type HookFormInputProps = InputProps & {
  name: string | any;
  showErrorLabel?: boolean;
  isPasswordField?: boolean;
  FormFieldProps?: FormFieldProps;
  fieldLabel?: string;
};

const HookFormInput: FC<HookFormInputProps> = (props) => {
  const id = useId();
  const {
    name = '',
    showErrorLabel = true,
    isPasswordField,
    fieldLabel,

    FormFieldProps,

    ...other
  } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [isPasswordType, setIsPasswordType] = useState<boolean>(true);

  const isError = !!errors?.[name] || other.isError;

  // debounce onchange
  // const handleChange = useCallback(
  //   (e: React.ChangeEvent<any>, field: FieldProps['field']) => {
  //     field.onChange(name)(e);
  //     onChange?.(e);
  //   },
  //   [onChange, name],
  // );

  // const debounceHandleChange = useCallback(
  //   debounce(handleChange, 100, {
  //     leading: false,
  //     trailing: true,
  //   }),
  //   [handleChange],
  // );

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormField {...FormFieldProps}>
            {!!fieldLabel && (
              <label htmlFor={id} style={{ textAlign: 'left' }}>
                {fieldLabel}
              </label>
            )}
            <Input
              id={id}
              {...field}
              {...other}
              title={`${isError ? errors?.[name]?.message : other?.title}`}
              isError={isError || other?.isError}
              {...(isPasswordField && {
                type: !isPasswordType ? 'text' : 'password',
                action: {
                  type: 'button',
                  icon: !isPasswordType ? 'eye' : 'eye slash',
                  onClick: () => setIsPasswordType((t) => !t),
                },
              })}
            />
          </FormField>
        )}
      />
      {showErrorLabel && isError && (
        <p className="hf-error-text">{`${errors?.[name]?.message}`}</p>
      )}
    </>
  );
};

export default memo(HookFormInput);
