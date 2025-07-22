import React from 'react';

interface ContentBoxProps {
  children: React.ReactNode;
}

export const ContentBox: React.FC<ContentBoxProps> = ({ children }) => {
  return (
    // <div className="w-full max-w-md md:max-w-lg mt-10 lg:max-w-xl h-[80vh] rounded-2xl p-6 md:p-8 animate-fade-in overflow-y-auto overflow-x-hidden">
    //   <div className="text-white">
    //     {children}
    //   </div>
    // </div>
    <div className="relative w-full max-w-md md:max-w-lg mt-10 lg:max-w-xl h-[80vh] rounded-2xl p-6 md:p-8 animate-fade-in overflow-y-auto overflow-x-hidden fade-mask">
  <div className="text-white">
    {children}
  </div>
</div>
  );
};