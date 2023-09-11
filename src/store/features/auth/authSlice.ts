import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthStateModel, LoginRequestModel } from 'models/auth/auth.model';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { login } from 'api/auth/auth.api';

const initialState: AuthStateModel = {
  token: '',
  loginData: null,
  loading: false,
};

export const loginAction = createAsyncThunk(
  'LOGIN_REQUEST',
  async (payload: LoginRequestModel) => login(payload),
);

export const logoutAction = createAction('LOGOUT_ACTION');

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthStateAction: (
      state,
      action: PayloadAction<Partial<AuthStateModel>>,
    ) =>
      ({
        ...state,
        ...action?.payload,
      } as AuthStateModel),
    resetAuthStateAction: () => ({ ...initialState }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state, action) => ({
        ...state,
        loading: true,
      }))
      .addCase(loginAction.fulfilled, (state, { payload }) => ({
        ...state,
        token: payload?.accessToken || '',
        loginData: payload ?? null,
        loading: false,
      }))
      .addCase(loginAction.rejected, (state, action) => ({
        ...state,
        loading: false,
      }))
      .addCase(logoutAction, (state, action) => ({
        ...state,
        token: '',
        loginData: null,
      }));
  },
});

export const { setAuthStateAction, resetAuthStateAction } = authSlice.actions;

const persistConfig = {
  key: 'authenticate',
  whitelist: ['token', 'loginData'],
  storage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
