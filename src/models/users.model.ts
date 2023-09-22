export interface UsersStateModel {
  users: SingleUserState[];
}

export type SingleUserState = {
  id: string;
  createdAt: string;
  name: string;
  job: string;
};

export type UserInput = {
  name: string;
  job: string;
};
