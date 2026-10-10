import Image from "next/image";
import React from "react";
// import Link from "next/link";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full"
  });



  return (
    <section className="container mx-auto px-4 py-6 md:px-8">
      <div className="overflow-hidden rounded-3xl bg-[#F2F5F3] p-8 shadow-sm md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-green-600 ">
              {date}
            </div>

            <h1 className="text-3xl font-extrabold leading-tight  text-black  sm:text-4xl lg:text-5xl">
              আজকের বাজারের দাম এক নজরে
            </h1>

            <p className="mt-4 max-w-lg text-sm text-slate-600 sm:text-base">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            {/* <Link href="/all"> */}
            <div className="mt-6">
              <button
                //  onClick={handleScrollToAllProducts}
                className="rounded-xl bg-[#0A8754] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
              >
                সব পণ্য দেখুন
              </button>
            </div>
            {/* </Link> */}
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              className="object-contain "
              src="/bazar-hero.png"
              alt="বাজারের পণ্য"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
