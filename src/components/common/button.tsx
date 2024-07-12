import React from 'react';

interface ButtonProps {
  trackReceipt: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ trackReceipt, title }) => {
  return (
    <button
      onClick={trackReceipt}
      className="btn inline-flex items-center justify-center w-full sm:h-12 h-10 px-6 sm:text-base text-md font-medium text-white transition rounded md:w-auto bg-slate-800 hover:bg-slate-600 focus:shadow-outline focus:outline-none"
    >
      {title}
    </button>
  )
}

export default Button;