import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignInPage = () => {
  return (
    <div className="min-h-screen bg-[#F5FAF7] flex flex-col items-center  px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-2xl font-bold text-[#202724]">সাইন ইন</h2>

        <p className="text-xs text-gray-500 mt-1">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-[420px] bg-white border border-[#E1E7E3] rounded-xl p-5 shadow-sm">
        <form className="space-y-3">
          {/* Email */}
          <div>
            <label className="block text-[13px] text-gray-700 mb-1">
              ইমেইল
            </label>

            <input
              name="email"
              type="email"
              placeholder="khamba@tarek.com"
              className="w-full h-10 px-3 rounded-md border border-[#DCE3DF] bg-white text-[13px] outline-none placeholder:text-gray-400 focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[13px] text-gray-700 mb-1">
              পাসওয়ার্ড
            </label>

            <input
              name="password"
              type="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              className="w-full h-10 px-3 rounded-md border border-[#DCE3DF] bg-white text-[13px] outline-none placeholder:text-gray-400 focus:border-[#079447] focus:ring-1 focus:ring-[#079447]"
            />
          </div>

          {/* Signin Button */}
          <button
            type="submit"
            className="w-full h-10 mt-2 rounded-md bg-[#079447] hover:bg-[#07833F] text-white text-[13px] font-medium shadow-sm transition duration-200"
          >
            সাইন ইন
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-[#E1E7E3] flex-1"></div>

          <span className="text-[11px] text-gray-400">অথবা</span>

          <div className="h-px bg-[#E1E7E3] flex-1"></div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-2">
          {/* Google */}
          <button
            type="button"
            className="h-9 px-2 flex items-center justify-center gap-2 border border-[#DCE3DF] rounded-md bg-white hover:bg-gray-50 text-[11px] font-medium text-gray-700 transition"
          >
            <FcGoogle className="text-[16px] shrink-0" />

            <span className="whitespace-nowrap">Google দিয়ে চালিয়ে যান</span>
          </button>

          {/* GitHub */}
          <button
            type="button"
            className="h-9 px-2 flex items-center justify-center gap-2 border border-[#DCE3DF] rounded-md bg-white hover:bg-gray-50 text-[11px] font-medium text-gray-700 transition"
          >
            <FaGithub className="text-[16px] text-[#24292F] shrink-0" />

            <span className="whitespace-nowrap">GitHub দিয়ে চালিয়ে যান</span>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-[11px] text-gray-500 mt-4">
          অ্যাকাউন্ট নেই ?{" "}
          <a
            href="/login"
            className="text-[#079447] font-medium hover:underline"
          >
            সাইন আপ
          </a>
        </p>
      </div>

      {/* Back to Home */}
      <a
        href="/"
        className="mt-5 text-[11px] text-gray-400 hover:text-[#079447] transition"
      >
        ← হোম পেজে ফিরে যান
      </a>
    </div>
  );
};

export default SignInPage;
