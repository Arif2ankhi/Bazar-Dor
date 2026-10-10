import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="  bg-slate-100 w-full py-2 px-4 sm:px-6 ">
      {/* <div className="max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0"> */}
      <div className="max-w-10/12 mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
      
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

        {/* Sign In / Sign Up Buttons use another components Userinfo imported here */}
        
        <UserInfo/>
      </div>
      <NavLinks/>
    </header>
  );
};

export default Header;
