"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
// import Link from "next/link";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries());

    const { error } = await authClient.updateUser({
      ...newUserData
    });

    if (error) {
      toast.error(error.message || "প্রোফাইল আপডেট করতে সমস্যা হয়েছে");
    } else {
      toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে");
      setShow(false);
    }
  };

  const handleShowForm = () => {
    setShow(!show);
  };

  return (
    <div className="min-h-screen bg-[#F5FAF7] p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#202724]">আমার প্রোফাইল</h2>
          <p className="text-xs text-gray-500 mt-1">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/*User Card information change */}
        <div className="bg-white border border-[#E1E7E3] rounded-xl p-5 shadow-sm flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 rounded-full ring-2 ring-[#079447] ring-offset-2">
                <img
                  alt="Avatar"
                  src={
                    user?.image ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#202724]">{user?.name}</h3>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleShowForm}
            className="btn btn-sm bg-white border border-red-300 text-red-600 hover:bg-red-50 flex items-center gap-1"
          >
            {show ? "ফর্ম বন্ধ করুন" : "এডিট প্রোফাইল"}
          </button>
        </div>

        {/* আপডেট ফর্ম */}
        {show && (
          <div className="bg-white border border-[#E1E7E3] rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-md mb-4 text-[#202724]">
              তথ্য পরিবর্তন করুন
            </h3>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  নাম
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.name || ""}
                  className="w-full h-10 px-3 rounded-md border border-[#DCE3DF] bg-white text-sm outline-none focus:border-[#079447]"
                  placeholder="আপনার নাম লিখুন"
                />
              </div>

              <button
                type="submit"
                className="w-full h-10 rounded-md bg-[#079447] hover:bg-[#07833F] text-white text-sm font-medium shadow-sm transition"
              >
                আপডেট করুন
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
