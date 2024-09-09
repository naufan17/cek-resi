import React from "react";

interface ContentProps {
  title: string;
  description?: string;
}

const content: React.FC<ContentProps> = ({ title, description }) => {
  return (
    <div>
      <h6 className="text-base font-semibold text-gray-800 sm:text-lg">
        {title}
      </h6>
      <p className="sm:text-base text-sm">
        {description}
      </p>
    </div>
  )
}

export default content;