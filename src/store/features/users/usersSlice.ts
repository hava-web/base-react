import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  deleteUser,
  showUsers,
  updateUser,
} from 'api/users/users.api';
import { use } from 'i18next';
import { UserInput, UsersStateModel } from 'models/users.model';

const initialState: UsersStateModel = {
  users: [],
};

export const userListAction = createAsyncThunk('USER_LIST', async () =>
  showUsers(),
);

export const createUserAction = createAsyncThunk(
  'CREATE_USER',
  async (data: UserInput) => createUser(data),
);

export const updateUserAction = createAsyncThunk(
  'UPDATE_USER',
  async (data: object) => updateUser(data),
);

export const deleteUserAction = createAsyncThunk(
  'DELETE_USER',
  async (id: string) => deleteUser(id),
);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      userListAction.fulfilled,
      (state, action: PayloadAction<any>) => ({
        ...state,
        users: [...action.payload],
      }),
    );
    builder.addCase(userListAction.pending, (state, action) => {
      console.log('Pending');
    });
    builder.addCase(userListAction.rejected, (state, action) => {
      console.log('Reject');
    });
    builder.addCase(createUserAction.pending, (state, action) => {
      console.log('Create Pending');
    });
    builder.addCase(
      createUserAction.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log('Create Fullfilled');
        state.users.push(action.payload);
      },
    );
    builder.addCase(deleteUserAction.pending, (state, action) => {
      console.log('Delete Pending');
    });
    builder.addCase(
      deleteUserAction.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log('Delete Fullfilled');
        // eslint-disable-next-line no-param-reassign
        state.users = state.users.filter(
          (user) => user.id !== action.payload.id,
        );
      },
    );
    builder.addCase(deleteUserAction.rejected, (state, action) => {
      console.log('Delete Reject');
    });
    builder.addCase(updateUserAction.pending, (state, action) => {
      console.log('Update Pending');
    });
    builder.addCase(
      updateUserAction.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log('Update Fullfilled');
        const user = state.users.find((user) => user.id === action.payload.id);
        if (user) {
          user.name = action.payload.name;
          user.job = action.payload.job;
        }
      },
    );
    builder.addCase(updateUserAction.rejected, (state, action) => {
      console.log('Update Reject');
    });
  },
});

export default usersSlice.reducer;
