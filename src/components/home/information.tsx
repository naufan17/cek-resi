import React from "react"
import { SummaryData } from "@/interfaces/track";

interface InformationProps {
  information: SummaryData
}

const Information: React.FC<InformationProps> = ({ information }) => {
  return (
    <div className="px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-10">
      <div className="grid row-gap-8 lg:grid-cols-4">
        <div className="grid lg:col-span-2">
          <h4 className="mb-10 sm:text-2xl text-xl font-bold text-gray-800">
            Informasi
          </h4>
        </div>
        <div className="grid border divide-y rounded-lg lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">No resi</p>
              <p className="sm:text-base text-sm">{information.awb}</p>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Kurir</p>
              <p className="sm:text-base text-sm">{information.courier}</p>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Layanan</p>
              <p className="sm:text-base text-sm">{information.service}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between sm:p-8 p-6 space-y-2">
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Status</p>
              <p className="sm:text-base text-sm">{information.status}</p>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Tanggal</p>
              <p className="sm:text-base text-sm">{information.date}</p>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-800 sm:text-lg">Berat</p>
              <p className="sm:text-base text-sm">{information.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;