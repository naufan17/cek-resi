import React, { ChangeEvent } from 'react';

interface InputProps {
  receipt: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void; 
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ receipt, handleInputChange, placeholder }) => {
  return (
    <input
      type="text"
      name="receipt"
      value={receipt}
      onChange={handleInputChange}
      placeholder={placeholder}
      required
      className="flex-grow sm:h-12 h-10 px-4 w-full sm:text-base text-md text-slate-950 bg-slate-100 border-2 border-slate-600 rounded-xl appearance-none focus:border-slate-400 focus:outline-none focus:shadow-outline"
    />
  )
}

export default Input;