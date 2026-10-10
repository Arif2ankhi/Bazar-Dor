// "use client";
// import { authClient } from "@/lib/auth-client";
// // import { authClient } from "@/lib/auth-client";

// import Link from "next/link";
// import React from "react";
// import toast from "react-hot-toast";

// const Userinfo = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;
//   //   console.log(user);

// //   const handleSignout = async () => {
// //     await authClient.signOut();
// //   };
// // React toast added
// const handleSignout = async () => {
//     const userName = user?.name || "User";

//     await authClient.signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           toast.success(`${userName} signed out successfully`);
//         },
//         onError: () => {
//           toast.error("Failed to sign out");
//         },
//       },
//     });
// }

//   return (
//     <div>
//       {user ? (
//         <div className="flex flex-col items-center gap-2">
//           {/* avatar image */}
//           <Link href={"/profile"}>
//             <div className="avatar">
//               <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
//                 <img
//                 alt="Tailwind-CSS-Avatar-component"
//                 src={user?.image}
//               />
//               </div>
//             </div>
//           </Link>
//           <h2>{user.name}</h2>
//           <button onClick={handleSignout} className="btn btn-error btn-xs">
//             Signout
//           </button>
//         </div>
//       ) : (
//         <div className="flex items-center gap-5">
//           <Link href={"/signin"}>
//             <button className="bg-green-800 text-white px-4 py-2 rounded-md text-sm  hover:text-green-400">
//               সাইন ইন
//             </button>
//           </Link>
//           <Link href={"/signup"}>
//             <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
//               সাইন আপ
//             </button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Userinfo;
"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaRegUser, FaChevronDown } from "react-icons/fa"; 
import { BiLogOut } from "react-icons/bi";
import { TbSquareRoundedChevronsDownFilled } from "react-icons/tb";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    const userName = user?.name || "User";
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success(`${userName} সফলভাবে সাইন আউট হয়েছেন`);
        },
        onError: () => {
          toast.error("সাইন আউট ব্যর্থ হয়েছে");
        }
      }
    });
  };

  return (
    <div>
      {user ? (
        /* DaisyUI Dropdown Menu */
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center gap-1.5 cursor-pointer select-none"
          >
            {/* Avatar */}
             <div className="avatar">
              <div className="w-10 rounded-full ring-2 ring-[#079447] ring-offset-2">
                <img
                  alt="Avatar"
                  src={user?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div> 

            {/* User Name & Arrow Icon */}
            <span className="font-medium text-sm text-gray-700 hidden md:inline ml-1">
              {user.name}
            </span>
            <TbSquareRoundedChevronsDownFilled  className="text-xs text-gray-500 ml-0.5" />
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow-lg bg-white rounded-2xl w-64 mt-3 border border-gray-100"
          >
            <li className="menu-title px-4 py-2 border-b border-gray-100">
              <p className="font-bold text-gray-800 text-sm truncate">
                {user.name}
              </p>
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            </li>

            <li className="mt-1">
              <Link
                href="/profile"
                className="flex items-center gap-2 text-gray-700 hover:text-[#079447]"
              >
                <FaRegUser className="text-gray-500" />
                <span>আমার প্রোফাইল</span>
              </Link>
            </li>

            <li>
              <button
                onClick={handleSignout}
                className="flex items-center gap-2 text-red-600 hover:bg-red-50 mt-1"
              >
                <BiLogOut className="text-red-500 text-lg" />
                <span>সাইন আউট</span>
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Link href={"/signin"}>
            <button className="bg-[#079447] text-white px-4 py-2 rounded-md text-sm hover:bg-[#07833F] transition">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
