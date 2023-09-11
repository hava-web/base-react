import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { appSlice } from './features/app/appSlice';
import { authReducer } from './features/auth/authSlice';
import { counterSlice } from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
