import React from 'react';
import { Send } from 'lucide-react';

interface SendButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export const SendButton: React.FC<SendButtonProps> = ({
  href = '/',
  label = 'Send',
  className = '',
}) => {
  return (
    <a
      href={href}
      className={`
        group relative inline-flex items-center justify-center gap-2 
        px-6 py-3 rounded-xl font-medium text-white 
        bg-primary hover:bg-primary-accent active:scale-95
        transition-all duration-200 ease-in-out
        shadow-md hover:shadow-primary/25
        overflow-hidden select-none cursor-pointer
        ${className}
      `}
    >
      <span>{label}</span>

      {/* Icon Container */}
      <div className="relative w-5 h-5 overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-6 group-hover:translate-x-6">
          {/* Primary Icon (Exits up-right) */}
          <Send className="w-5 h-5 absolute inset-0" />
          
          {/* Secondary Icon (Starts down-left, enters into position) */}
          <Send className="w-5 h-5 absolute inset-0 translate-y-6 -translate-x-6" />
        </div>
      </div>
    </a>
  );
};

export default SendButton;