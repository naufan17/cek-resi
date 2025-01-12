import React, { ChangeEvent } from 'react';
import { CourierData } from '@/types/courier';

interface OptionProps {
  courier: string;
  handleInputChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  option: CourierData[];
}

const Option: React.FC<OptionProps> = ({ courier, handleInputChange, option }) => {
  return (
    <select
      name="courier"
      value={courier}
      onChange={handleInputChange}
      className="flex-grow w-full sm:h-12 h-9 px-4 text-sm sm:text-base text-md text-slate-900 transition rounded-xl shadow-md bg-slate-100 border border-slate-600 appearance-none  focus:ring-2 focus:ring-slate-400 focus:shadow-outline focus:outline-none"
    >
      <option value="" disabled hidden>Pilih Kurir</option>
        {option.map((opt, index) => 
          <option key={index} value={opt.code}>{opt.description}</option>
        )}
    </select>
  )
}

export default Option;