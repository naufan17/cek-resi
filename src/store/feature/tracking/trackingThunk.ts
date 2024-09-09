import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCourier } from '@/api/courier';
import { getTrack } from '@/api/track';
import { 
  setList, 
  setInformation, 
  setDetail, 
  setHistory, 
  setAlert, 
} from '@/store/feature/tracking/trackingSlice';

export const fetchCourierList = createAsyncThunk('/tracking/fetchCourier', async (_, { dispatch }) => {
  try {
    const result = await getCourier();
    dispatch(setList(result));   
  } catch (err) {
    console.error(err);
  }
});

export const fetchTrackInformation = createAsyncThunk('/tracking/fetchTrack', async ({ courier, receipt }: { courier: string, receipt: string }, { dispatch }) => {
  try {
    const result = await getTrack(courier, receipt);
    dispatch(setInformation(result.summary));
    dispatch(setDetail(result.detail));
    dispatch(setHistory(result.history));  
  } catch (err) {
    dispatch(setAlert(true))
    console.error(err);
  }
});