import axios from '@/config/axios';
import { CourierData } from '@/interfaces/courier';

const getCourier = async (): Promise<CourierData[]> => {
  try {
    const result = await axios.get('/list_courier', {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
      }
    })
    return result.data;
  } catch (err) {
    throw new Error('Failed to fetch the list of couriers');
  } 
}

export default getCourier;