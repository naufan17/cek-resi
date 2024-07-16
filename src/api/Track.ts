import axios from '../config/axios';
import { TrackData } from '@/interfaces/track';

export const getTrack = async (courier: string, receipt:string): Promise<TrackData> => {
  try {
    const result = await axios.get('/track', {
      params: {
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        courier,
        awb: receipt
      }
    })
    return result.data.data;
  } catch (err) {
    throw new Error('Failed to fetch track receipt');
  } 

  // const data = {
  //   "status": 200,
  //   "message": "Successfully tracked package",
  //   "data": {
  //     "summary": {
  //       "awb": "TKP01-C0KQJMC",
  //       "courier": "Kurir Rekomendasi",
  //       "service": "Regular",
  //       "status": "DELIVERED",
  //       "date": "",
  //       "desc": "",
  //       "amount": "",
  //       "weight": ""
  //     },
  //     "detail": {
  //       "origin": "Kalideres, Kota Administrasi Jakarta Barat, DKI Jakarta",
  //       "destination": "Pondok Aren, Kota Tangerang Selatan, Banten",
  //       "shipper": "AUTONET COVER",
  //       "receiver": "Agung Prasetyo"
  //     },
  //     "history": [
  //       {
  //         "date": "17 Mei 12:20 WIB",
  //         "desc": "Yay, pesanan sudah sampai dan diterima oleh Agung Prasetyo; Penerima asli [KURIR: ANTERAJA]",
  //         "location": "Tangerang"
  //       },
  //       {
  //         "date": "17 Mei 10:18 WIB",
  //         "desc": "Kurir sudah ditugaskan dan pesanan akan segera diantar ke pembeli. [KURIR: ANTERAJA]",
  //         "location": "Tangerang"
  //       },
  //       {
  //         "date": "17 Mei 08:21 WIB",
  //         "desc": "Pesanan sampai di sorting center Tangerang (Hub Tangerang). [KURIR: ANTERAJA]",
  //         "location": "Tangerang"
  //       },
  //       {
  //         "date": "17 Mei 05:30 WIB",
  //         "desc": "Pesanan keluar dari sorting center Tangerang (Hub Tangerang). [KURIR: ANTERAJA]",
  //         "location": "Tangerang"
  //       },
  //       {
  //         "date": "15 Mei 17:41 WIB",
  //         "desc": "Pesanan sudah di-pickup oleh kurir. [KURIR: ANTERAJA]",
  //         "location": "Jakarta Timur"
  //       },
  //       {
  //         "date": "15 Mei 09:01 WIB",
  //         "desc": "Kurir dalam perjalanan untuk mengambil pesanan dari penjual. [KURIR: ANTERAJA]",
  //         "location": "Jakarta Utara"
  //       },
  //       {
  //         "date": "13 Mei 15:55 WIB",
  //         "desc": "Kurir mitra logistik kami akan pick-up pesanan pada Minggu 14 Mei 2023 sekitar jam 16:00 WIB. [KURIR: ANTERAJA]",
  //         "location": ""
  //       },
  //       {
  //         "date": "13 Mei 15:55 WIB",
  //         "desc": "Penjual telah melakukan request pick-up. Kurir akan pick-up pesanan pada Minggu 14 Mei 2023 pukul 10:00 - 16:00. [KURIR: ANTERAJA]",
  //         "location": ""
  //       }
  //     ]
  //   }
  // }

  // return data.data;
}