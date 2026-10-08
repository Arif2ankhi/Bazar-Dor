import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className=" bg-slate-100 w-full py-2 px-4 sm:px-6 ">
      <div className="max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        {/* Logo and App Title */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            className="bg-green-600 rounded-xl shrink-0"
            src="/logo-icon.png"
            alt="logo-img"
            height={40}
            width={40}
            priority
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-black leading-tight">
              বাজার দর
            </h1>
            <span className="text-[11px] sm:text-xs text-neutral-500 block">
              {date}
            </span>
          </div>
        </div>

        {/* Sign In / Sign Up Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors">
            সাইন ইন
          </button>

          <button className="bg-blue-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-blue-600 transition-colors">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks/>
    </header>
  );
};

export default Header;
