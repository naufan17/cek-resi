import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCourier } from '@/api/courier';
import { getTrack } from '@/api/track';
import { 
  setList, 
  setInformation, 
  setDetail, 
  setHistory, 
  setAlert, 
} from '@/store/slices/trackingSlice';

export const fetchCourierList = createAsyncThunk('/tracking/fetchCourierList', async (_, { dispatch }) => {
  try {
    const result = await getCourier();
    dispatch(setList(result));   
  } catch (err) {
    console.error('Error fetching couriers:', err);
  }
});

export const fetchTrackInformation = createAsyncThunk('/tracking/fetchTrackInformation', async ({ courier, receipt }: { courier: string, receipt: string }, { dispatch }) => {
  try {
    const result = await getTrack(courier, receipt);
    dispatch(setInformation(result.summary));
    dispatch(setDetail(result.detail));
    dispatch(setHistory(result.history));  
  } catch (err) {
    dispatch(setAlert(true))
    console.error('Error fetching track:', err);
  }
});