import React from "react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });
export default function Home() {
  return (
    <div
      className="h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
     from-sky-500 to-blue-700 flex flex-col items-center justify-center"
    >
      <div className={`text-center w-[50%] ${poppins.className}`}>
        <div className="text-5xl text-white font-semibold drop-shadow-md pr-4">
          🔐Auth
        </div>
        <p className="text-white drop-shadow-md mt-4 word-wrap: break-word text-xl">
          A Simple Authentication Service
        </p>
        <LoginButton>
          <Button className="mt-5 text-black" variant={"outline"}>
            Sign In
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
