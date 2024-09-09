import axiosInstance from '@/config/api';
import { CourierData } from '@/types/courier';

export const getCourier = async (): Promise<CourierData[]> => {
  try {
    const result = await axiosInstance.get('/list_courier', {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      }
    })
    return result.data;
  } catch (err) {
    throw new Error('Failed to fetch the list of couriers');
  } 
}