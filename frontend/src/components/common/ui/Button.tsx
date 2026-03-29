import React from 'react';
import s from './button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'yellow';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold transition-all active:scale-95";
  
  const variants = {
    primary: "bg-[#274C5B] text-white hover:bg-[#1a333d]", 
    outline: "border-2 border-[#274C5B] text-[#274C5B] hover:bg-[#274C5B] hover:text-white",
    yellow: "bg-[#EFD372] text-[#274C5B] hover:bg-[#d9c065]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} ${s.root}`} 
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
      {!isLoading && <span className="ml-2 inline-block">→</span>}
    </button>
  );
};