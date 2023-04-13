import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen px-16 py-6 bg-slate-300">
      {/* Desktop/Tablet */}
      <div className="hidden w-full h-full bg-red-600 md:flex"></div>
      {/* Mobile */}
      <div className="flex w-full h-full bg-blue-600 md:hidden"></div>
    </div>
  );
};

export default Header;
