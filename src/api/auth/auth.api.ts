import { LoginRequestModel } from 'models/auth/auth.model';

export function login(payload: LoginRequestModel) {
  return {
    id: 1,
    email: 'string',
    name: 'string',
    avatar: 'string',
    expiresIn: 'string',
    accessToken: 'string',
    refreshToken: 'string',
    expiresInRefresh: 'string',
  };
  // Todo: Can ghep them axios
}
