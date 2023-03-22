import React from "react";
import Image from "next/image";

const Testimonial = (props:{
    text: string
    avatar: string
    name: string
}) => {
  return (
    <div className="bg-inherit rounded-lg overflow-hidden shadow-md p-4 w-80 min-h-[17rem] flex flex-col justify-between border-2 border-borderColor text-themeColor">
      <div className="mb-4 text-themeColor">
        <p className="text-gray-600 font-serif text-themeColor">{props['text']}</p>
      </div>
      <div className="flex items-center text-themeColor">
        <Image src={props['avatar']} alt="Avatar" className="w-12 h-12 rounded" width={40} height={40}/>
        <span className="ml-2 text-gray-800 font-medium text-themeColor">{props['name']}</span>
      </div>
    </div>
  );
};

export default Testimonial;
