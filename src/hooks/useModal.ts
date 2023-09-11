import { AppStateModel } from 'models/app.model';
import { setAppStateAction } from 'store/features/app/appSlice';
import { useAppDispatch } from 'store/store-hooks';

export function useModal() {
  const dispatch = useAppDispatch();

  const openConfirmModal = (
    data: Partial<AppStateModel['confirmModal']> = null,
  ) => {
    dispatch(
      setAppStateAction({
        confirmModal: { ...data, open: true },
      }),
    );
  };

  const closeConfirmModal = () => {
    dispatch(
      setAppStateAction({
        confirmModal: { open: false },
      }),
    );
  };

  const openRightDrawModal = (
    data: Partial<AppStateModel['rightModal']> = null,
  ) => {
    dispatch(
      setAppStateAction({
        rightModal: { ...data, open: true },
      }),
    );
  };

  const closeRightDrawModal = () => {
    dispatch(
      setAppStateAction({
        rightModal: { open: false },
      }),
    );
  };

  return {
    openConfirmModal,
    closeConfirmModal,
    openRightDrawModal,
    closeRightDrawModal,
  };
}
