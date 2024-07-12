import React from "react"
import { DetailData } from "@/interfaces/track";

interface DetailProps {
  detail: DetailData
}

const Detail: React.FC<DetailProps> = ({ detail }) => {
  return (
    <div className="px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-10" id="detail">
      <div className="grid row-gap-8 lg:grid-cols-4">
        <div className="grid lg:col-span-2">
          <h4 className="mb-10 sm:text-2xl text-xl font-bold text-gray-800">
            Detail
          </h4>
        </div>
        <div className="grid border divide-y rounded-lg lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Asal</p>
              <p className="sm:text-base text-sm">{detail.origin}</p>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Tujuan</p>
              <p className="sm:text-base text-sm">{detail.destination}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Pengirim</p>
              <p className="sm:text-base text-sm">{detail.shipper}</p>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Penerima</p>
              <p className="sm:text-base text-sm">{detail.receiver}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;