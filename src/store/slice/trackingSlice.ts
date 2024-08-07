import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourierData } from '@/interfaces/courier';
import { SummaryData, DetailData, HistoryData } from '@/interfaces/track';

interface TrackingState {
  receipt: string;
  courier: string;
  list: CourierData[];
  information: SummaryData | null;
  detail: DetailData | null;
  history: HistoryData[] | null;
  alert: boolean;
  errors: { [key: string]: string };
}

const initialState: TrackingState = {
  receipt: '',
  courier: '',
  list: [],
  information: null,
  detail: null,
  history: null,
  alert: false,
  errors: {},
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    setReceipt(state, action: PayloadAction<string>) {
      state.receipt = action.payload;
    },
    setCourier(state, action: PayloadAction<string>) {
      state.courier = action.payload;
    },
    setList(state, action: PayloadAction<CourierData[]>) {
      state.list = action.payload;
    },
    setInformation(state, action: PayloadAction<SummaryData | null>) {
      state.information = action.payload;
    },
    setDetail(state, action: PayloadAction<DetailData | null>) {
      state.detail = action.payload;
    },
    setHistory(state, action: PayloadAction<HistoryData[] | null>) {
      state.history = action.payload;
    },
    setAlert(state, action: PayloadAction<boolean>) {
      state.alert = action.payload;
    },
    setErrors(state, action: PayloadAction<{ [key: string]: string }>) {
      state.errors = action.payload;
    },
  },
});

export const {
  setReceipt,
  setCourier,
  setList,
  setInformation,
  setDetail,
  setHistory,
  setAlert,
  setErrors,
} = trackingSlice.actions;

export default trackingSlice.reducer;