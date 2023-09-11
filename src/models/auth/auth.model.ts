export interface AuthStateModel {
  token: string;
  loginData: LoginModel | null;
  loading: boolean;
}

export type LoginModel = {
  id: number;
  email: string;
  name: string;
  avatar?: string;
  expiresIn: string;
  accessToken: string;
  refreshToken: string;
  expiresInRefresh: string;
};
export type LoginRequestModel = {
  email: string;
  password: string;
};
export type LoginResponseModel = LoginModel;
