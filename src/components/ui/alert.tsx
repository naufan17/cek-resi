import React from 'react';

interface alertProps {
  status: boolean;
  message: string;
  onClose: () => void;
}

const Alert: React.FC<alertProps> = ({ status, message, onClose }) => {
const alertStyle = status
  ? "bg-green-100 border-green-800 text-green-800"
  : "bg-red-100 border-red-800 text-red-800"

  return (
    <div className={`relative border-2 px-4 py-3 rounded-xl mb-4 ${alertStyle}`} role="alert">
      <span className={`block sm:inline text-sm md:text-base font-medium ${status ? 'text-green-800' : 'text-red-800'}`}>
        {message}
      </span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={onClose} role="button">
        <svg className={`fill-current h-6 w-6 ${status ? 'text-green-800' : 'text-red-800'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
      </span>
    </div>
  );    
}

export default Alert;