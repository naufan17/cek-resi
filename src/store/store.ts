import { configureStore } from '@reduxjs/toolkit';
import trackingReducer from '@/store/feature/tracking/trackingSlice';

export const store = configureStore({
  reducer: {
    tracking: trackingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;