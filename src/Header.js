import React from "react";

function Header(props) {
  return (
    <header className="flex flex-col items-center justify-center mb-1 xl:flex-row justify-between">
      <div>
        <h1 className="mr-3 p-5 pl-5 font-bold uppercase tracking-wide text-4xl mb-1 box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 rounded shadow">
          Krudo Spare Pvt. Ltd.
        </h1>
        <p className="text-red-600">
          GST No:{" "}
          <span className="text-gray-900 font-medium">07BYFPA6064GIZF</span>
        </p>
      </div>
    </header>
  );
}

// font-bold uppercase tracking-wide text-4xl mb-1
// box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2
export default Header;
