'use client'

import React, { ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/lib/store'
import Input from '@/components/ui/input';
import Option from '@/components/ui/option';
import Button from '@/components/ui/button';
import Alert from '@/components/ui/alert';
import Information from "@/app/information";
import Detail from "@/app/detail";
import History from "@/app/history";
import { fetchCourierList, fetchTrackInformation } from '@/lib/thunks/trackingThunk';
import { 
  setReceipt, 
  setCourier, 
  setAlert, 
  setErrors 
} from '@/lib/slices/trackingSlice';

const Page: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    receipt, 
    courier, 
    list, 
    information, 
    detail, 
    history, 
    alert, 
    errors 
  } = useSelector((state: RootState) => state.tracking);

  useEffect(() => {
    dispatch(fetchCourierList());
  }, [dispatch])

  const validateFields = () => {
    const newErrors: {[key: string]: string} = {};

    if (!receipt) newErrors.receipt = "*Resi harus diisi*";
    if (!courier) newErrors.courier = "*Kurir harus diisi*";

    return newErrors;
  }

  const handleChekTracking = () => {
    const validateErrors = validateFields();

    if (Object.keys(validateErrors).length > 0) {
      dispatch(setErrors(validateErrors));
      return;
    }

    dispatch(setErrors({}));
    dispatch(fetchTrackInformation({ courier, receipt }));
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'courier':
        dispatch(setCourier(value));
        break;
      case 'receipt':
        dispatch(setReceipt(value));
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="relative bg-slate-900">
        <div className="absolute inset-x-0 bottom-0">
          <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
          <div className="max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-3xl sm:text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl sm:leading-none">
              Cek Resi
            </h2>
            <p className="mb-6 text-sm font-thin text-gray-300 sm:text-lg">
              Lacak Barang Pengirimanmu via JNE, JNT, SiCepat, Shopee Express dll
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-8 mb-6 justify-between sm:space-x-2">
              <div className="inline-block sm:col-span-5">
                <Input 
                  receipt={receipt} 
                  handleInputChange={handleInputChange} 
                  placeholder={'Masukkan Resi'} 
                />
                {errors.receipt && 
                  <p className="mt-1 text-red-500 text-sm sm:text-base">
                    {errors.receipt}
                  </p>
                }
              </div>
              <div className="inline-block mt-2 sm:mt-0 sm:col-span-2">
                <Option 
                  option={list} 
                  courier={courier} 
                  handleInputChange={handleInputChange} 
                />
                {errors.courier && 
                  <p className="mt-1 text-red-500 text-sm sm:text-base">
                    {errors.courier}
                  </p>
                }
              </div>
              <div className="inline-block mt-2 sm:mt-0 sm:col-span-1">
                <Button onClick={handleChekTracking} title={'Cek'}/>
              </div>
            </div>
            {alert && 
              <Alert 
                status={false} 
                message={"Resi tidak ditemukan"} 
                onClose={() => setAlert(false)}
              />
            }
          </div>
        </div>
      </div>
      {information && <Information information={information} />}
      {detail && <Detail detail={detail} />}
      {history && <History history={history} />}
    </>
  );
}

export default Page;