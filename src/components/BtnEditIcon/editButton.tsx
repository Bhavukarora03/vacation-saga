import React, { FC } from "react";
import { FaPencilAlt } from "react-icons/fa";

export interface BtnEditIconProps {
  className?: string;
  colorClass?: string;
  isEdit?: boolean;
  onClick?: () => void; // Add an onClick prop
}

const BtnEditIcon: FC<BtnEditIconProps> = ({
  className = "",
  colorClass = "text-white bg-black bg-opacity-30 hover:bg-opacity-50",
  isEdit = false,
  onClick, // Receive an onClick prop
}) => {
  const handleButtonClick = () => {
    // Call the onClick prop if it's provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`nc-BtnEditIcon w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ${colorClass} ${className}`}
      data-nc-id="BtnEditIcon"
      title="Edit"
      onClick={handleButtonClick}
    >
      {/* Use the FaPencilAlt icon from React Icons */}
      <FaPencilAlt className="h-5 w-5" />
    </div>
  );
};

export default BtnEditIcon;
