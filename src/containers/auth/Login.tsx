import React, { useCallback, useMemo, useState } from 'react';
import * as Yup from 'yup';
import logoImg from 'assets/images/fun_logo.png';
import { Button, Form, Header, Image, Segment } from 'semantic-ui-react';
import { useReactForm } from 'hooks/useReactForm';
import { FormProvider } from 'react-hook-form';
import HookFormInput from 'components/hook-form/HookFormInput';
import { loginAction } from 'store/features/auth/authSlice';
import { useAppDispatch } from 'store/store-hooks';
import { LoginRequestModel } from 'models/auth/auth.model';
import { useNavigate } from 'react-router-dom';
import { AppRouteConst } from 'constants/route.const';
import { useTranslation } from 'react-i18next';
import { I18nNamespace } from 'constants/i18n.const';
import { toastSuccess } from 'helpers/toast.helper';

const Login = () => {
  const { t } = useTranslation(I18nNamespace.AUTH);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // hook form
  const formSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .trim()
          .required(`${t('emailIsRequired')}`),
        password: Yup.string()
          .trim()
          .required(`${t('passwordIsRequired')}`),
      }),
    [t],
  );

  const formMethods = useReactForm({
    formSchema,
  });
  const { handleSubmit } = formMethods;

  const handleSubmitForm = useCallback(
    (submitData: LoginRequestModel) => {
      setIsSubmitting(true);
      dispatch(loginAction({ ...submitData }))
        .then((res) => {
          if (!('error' in res) || !res?.error) {
            toastSuccess(t('successLogin'));
            navigate(AppRouteConst.DASHBOARD);
          }
        })
        .finally(() => setIsSubmitting(false));
    },
    [dispatch, navigate, t],
  );

  return (
    <>
      <Header as="h2" color="pink" textAlign="center">
        <Image src={logoImg} /> Log-in to your account
      </Header>
      <FormProvider {...formMethods}>
        <Form size="large" onSubmit={handleSubmit(handleSubmitForm)}>
          <Segment>
            <HookFormInput
              fluid
              icon="user"
              name="email"
              iconPosition="left"
              placeholder={t('emailAddress')}
            />
            <HookFormInput
              fluid
              icon="lock"
              name="password"
              iconPosition="left"
              isPasswordField
              placeholder={t('Password')}
            />

            <Button
              type="submit"
              color="pink"
              fluid
              size="large"
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              {t('Login')}
            </Button>
          </Segment>
        </Form>
      </FormProvider>
    </>
  );
};

export default Login;
