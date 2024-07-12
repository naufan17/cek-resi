import axios from '../config/axios';
import { CourierData } from '@/interfaces/courier';

export const requestGetListCourier = async (): Promise<CourierData[]> => {
  try {
    const result = await axios.get('/list_courier', {
      params: {
        api_key: '174f7c4199d633fb2436acbf5e2576bc505aba36a11fa4bf1f6116e77c0c7c70'
      }
    })
    return result.data;
  } catch (err) {
    return Promise.reject(err);
  } 
}