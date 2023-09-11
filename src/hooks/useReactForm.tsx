import { useCallback, useEffect, useMemo } from 'react';
import { useForm, UseFormProps } from 'react-hook-form';
import * as Yup from 'yup';
import { size } from 'lodash';

type UseReactFormProps = UseFormProps & {
  defaultValues?: any;
  formSchema?: any;
};

// Todo: refactor types
export const useReactForm = ({
  defaultValues = null,
  formSchema = null,
  ...other
}: UseReactFormProps) => {
  // Todo: refactor types
  const useYupValidationResolver = (schema: any) =>
    useCallback(
      async (data: any) => {
        try {
          const values = await schema.validate(data, {
            abortEarly: false,
          });

          return {
            values,
            errors: {},
          };
          // Todo: refactor types
        } catch (errs: any) {
          return {
            values: {},
            errors: errs?.inner?.reduce(
              // Todo: refactor types
              (allErrors: any, currentError: any) => ({
                ...allErrors,
                [currentError?.path]: {
                  type: currentError?.type ?? 'validation',
                  message: currentError?.message,
                },
              }),
              {},
            ),
          };
        }
      },
      [schema],
    );
  const formSchemaMemo = useMemo(
    () => formSchema || Yup.object(),
    [formSchema],
  );
  const defaultValuesMemo = useMemo(
    () => (size(defaultValues) ? defaultValues : null),
    [defaultValues],
  );
  const resolver = useYupValidationResolver(formSchemaMemo);
  const methods = useForm({
    resolver,
    defaultValues,
    ...other,
  });
  const { reset } = methods;

  useEffect(() => {
    reset({ ...defaultValuesMemo });
  }, [reset, defaultValuesMemo]);

  return methods;
};

export const useYupHelper = () => ({});
