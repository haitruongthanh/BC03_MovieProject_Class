import React from "react";
import HeaderTheme from "../components/HeaderTheme/HeaderTheme";

export function LayoutTheme({ Component }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderTheme />
      <div className="flex-grow">
        <Component />
      </div>
      <footer className="h-20 bg-blue-500 w-full"></footer>
    </div>
  );
}
