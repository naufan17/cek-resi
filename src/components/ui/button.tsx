import React from 'react';

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center w-full sm:h-12 h-9 px-8 sm:text-base text-md font-medium text-slate-900 transition rounded-xl md:w-auto bg-slate-100 hover:bg-slate-300 hover:text-slate-950 focus:shadow-outline focus:outline-none"
    >
      {title}
    </button>
  )
}

export default Button;