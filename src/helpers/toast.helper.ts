import { toast, ToastOptions, Flip } from 'react-toastify';
import { get } from 'lodash';
import i18n from 'i18next';
import { I18nNamespace } from 'constants/i18n.const';

const toastOptions = {
  position: 'top-center',
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Flip,
} as ToastOptions;

function _toastError(error: any, duration?: number) {
  const options = duration
    ? { ...toastOptions, autoClose: duration }
    : toastOptions;
  if (typeof error === 'string') {
    return toast.error(error, options);
  }
  if (error.response) {
    // if (!(error.response.status === 401)) {
    return toast.error(
      Array.isArray(error.response?.data?.message)
        ? error.response?.data?.message[0]
        : error.response?.data?.message || error.message,
      options,
    );
  }
  // } else if (error.request) {
  //   return toast('Network error', options);
  // }

  return toast.error(error.message, options);
}

function _toastSuccess(success: any, duration?: number) {
  const options = duration
    ? { ...toastOptions, autoClose: duration }
    : toastOptions;
  if (typeof success === 'string') {
    return toast.success(success, options);
  }
  if (success.response) {
    return toast.success(
      get(success.response, 'data.message') || success.message,
      options,
    );
  }
  if (success.request) {
    return toast.success(
      i18n.t(`${I18nNamespace.COMMON}:networkError`),
      options,
    );
  }
  return toast.success(success.message, options);
}

class ToastInstance {
  toast: any = null;

  toastSuccess = (message: any, duration: number = 3000) => {
    if (typeof message !== 'string') return;

    if (!toast.isActive(this.toast)) {
      this.toast = _toastSuccess(message, duration);
    } else {
      toast.update(this.toast, {
        render: message,
        closeButton: null,
        autoClose: duration,
      });
    }
  };

  toastError = (message: any, duration: number = 3000) => {
    if (typeof message !== 'string') return;

    if (!toast.isActive(this.toast)) {
      this.toast = _toastError(message, duration);
    } else {
      toast.update(this.toast, {
        render: message,
        closeButton: null,
        autoClose: duration,
      });
    }
  };
}

const toastSuccessInstance = new ToastInstance();
const toastErrorInstance = new ToastInstance();

const { toastSuccess } = toastSuccessInstance;
const { toastError } = toastErrorInstance;

export { toastSuccess, toastError };
