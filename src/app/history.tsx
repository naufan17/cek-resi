import React from 'react';
import { HistoryData } from '@/types/track';
import Subtitle from "@/components/ui/subtitle";

interface HistoryProps {
  history: HistoryData[];
}

const History: React.FC<HistoryProps> = ({ history }) => {
  const sortedHistory = [...history].reverse();

  return (
    <div className="px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-10" id="informasi">
      <div className="grid row-gap-8 lg:grid-cols-4">
        <Subtitle title={"Riwayat"}/>
        <div className="grid lg:col-span-2">
          {sortedHistory.map((item, index) => (
            <div className="flex" key={index}>
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    {index === history.length - 1 ? (
                      <svg className="w-6 text-gray-800" stroke="currentColor" viewBox="0 0 24 24">
                        <polyline fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="6,12 10,16 18,8"></polyline>
                      </svg>
                    ) : (
                      <svg className="w-4 text-gray-800" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <line fill="none" strokeMiterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                        <polyline fill="none" strokeMiterlimit="10" points="19,15 12,22 5,15"></polyline>
                      </svg>
                    )}
                  </div>
                </div>
                {index !== history.length - 1 && <div className="w-px h-full bg-gray-300"></div>}
              </div>
              <div className="pt-1 sm:pt-1 p-6 sm:p-8">
                <p className="mb-2 text-base font-semibold text-gray-800 sm:text-lg">
                  {item.desc} - {item.location}
                </p>
                <p className="sm:text-base text-sm">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;