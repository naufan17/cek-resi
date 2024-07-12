import React, { ChangeEvent } from 'react';
import { CourierData } from '@/interfaces/courier';

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
      className="inline-flex w-full sm:h-12 h-10 px-2 mb-3 sm:text-base text-md text-white transition rounded shadow-md md:w-auto bg-slate-800 hover:bg-slate-600 md:mr-2 md:mb-0 focus:shadow-outline focus:outline-none"
    >
      <option value="" disabled hidden>Pilih Kurir</option>
        {option.map((opt, index) => 
          <option key={index} value={opt.code}>{opt.description}</option>
        )}
    </select>
  )
}

export default Option;