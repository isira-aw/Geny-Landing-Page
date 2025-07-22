import React from 'react';

interface ContentBoxProps {
  children: React.ReactNode;
}

export const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl h-[80vh] bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl animate-fade-in overflow-y-auto overflow-x-hidden">
      <div className="text-white">
        {children}
      </div>
    </div>
  );
};