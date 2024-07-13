import React from "react";

interface ErrorProps {
  title: string;
}

const Error: React.FC<ErrorProps> = ({ title }) => {
  return (
    <div className="px-8 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:p-10">
      <div className="flex justify-center">
        <h4 className="mb-10 sm:text-xl text-lg font-bold text-red-600">
          {title}
        </h4>
      </div>
    </div>
  )
}

export default Error;