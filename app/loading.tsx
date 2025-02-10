import React from "react";

export default function loading() {
  return (
    /* From Uiverse.io by clarencedion */
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative">
        <div className="relative h-32 w-32">
          <div
            className="absolute h-full w-full animate-spin rounded-full border-[3px] border-secondary-300/10 border-b-primary-500 border-r-primary-500"
            style={{ animationDuration: "3s" }}
          ></div>

          <div
            className="absolute h-full w-full animate-spin rounded-full border-[3px] border-secondary-300/10 border-t-primary-500"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          ></div>
        </div>

        <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-primary-500/10 via-transparent to-primary-500/5 blur-sm"></div>
      </div>
    </div>
  );
}
