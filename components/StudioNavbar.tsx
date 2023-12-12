import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import React from 'react';
// Adds markup and invokes renderDefault()
function MyEnhancedNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#0000FF] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#0000FF] mr-2" />
          Go to Website
        </Link>
        <div className="hidden  shadow-2xl bg-[#adadafcc] md:flex p-5 rounded-lg justify-center border-4 border-[#424342]">
          <h1 className="font-bold text-[#424342]  text-xl ml-2">
            Welcome to your website's Studio
          </h1>

        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default MyEnhancedNavbar;
