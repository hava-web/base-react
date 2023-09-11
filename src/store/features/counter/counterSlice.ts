import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from 'store';
import { CounterStateModel } from 'models/counter.model';

// Define the initial state using that type
const initialState: CounterStateModel = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => ({
      ...state,
      value: state?.value + 1,
    }),
    decrement: (state) => ({
      ...state,
      value: state?.value - 1,
    }),
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      value: state?.value + action.payload,
    }),
  },
});

export const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
