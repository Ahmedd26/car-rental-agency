import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden min-h-dvh w-full bg-white md:block">%SIDEBAR%</div>
      <div className="col-span-4 mx-4 my-8 md:col-span-3 md:mx-8">
        {children}
      </div>
    </div>
  );
}
