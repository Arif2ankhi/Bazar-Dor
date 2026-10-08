import Image from "next/image";
import React from "react";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
  });
  return (
    <header className="bg-blue-100 container mx-auto py-2 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <Image
          className="bg-primary rounded-xl"
          src="/logo-icon.png"
          alt="logo-img"
          height={40}
          width={40}
        />
        <div>
          <h1 className="text-2xl font-bold text-black leading-tight">বাজার দর</h1>
          <span className="text-xs text-neutral-500 block">{date}</span>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
