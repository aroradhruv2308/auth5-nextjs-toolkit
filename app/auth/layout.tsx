import React from "react";

export default function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
  from-sky-500 to-blue-700 flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
}
