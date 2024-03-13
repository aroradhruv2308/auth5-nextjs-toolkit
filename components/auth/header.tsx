import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: "600" });
export default function Header({ headerLabel }: { headerLabel: string }) {
  return (
    <div className="w-[100%]">
      <div
        className={`font-semibold text-3xl text-center pr-4 ${poppins.className}`}
      >
        🔐Auth
      </div>
      <div className="mt-3 pr-2 text-slate-600 font-normal text-sm text-center">
        {headerLabel}
      </div>
    </div>
  );
}
