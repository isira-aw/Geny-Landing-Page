import React from "react";

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
    

<div className="relative w-full max-w-md md:max-w-lg mt-10 lg:max-w-xl h-[80vh] rounded-2xl p-6 md:p-8 animate-fade-in overflow-y-auto overflow-x-hidden fade-mask max-[450px]:bg-[rgba(15,15,15,0.8)] max-[450px]:max-w-full max-[450px]:h-screen max-[450px]:rounded-none max-[450px]:mt-0 max-[450px]:p-4">
  <div className="text-white">{children}</div>
</div>
  );
};
