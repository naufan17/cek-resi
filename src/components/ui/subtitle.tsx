import React from "react";

interface SubtitleProps {
  title: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ title }) => {
  return (
    <div className="grid lg:col-span-2">
      <h4 className="mb-10 sm:text-2xl text-xl font-bold text-gray-800">
        {title}
      </h4>
    </div>
  )
}

export default Subtitle;