import React, { useEffect } from "react";

export function Button({ onClick, children }) {
  return (
    <>
      <button
        className="bg-green-500 p-2 rounded-md font-semibold mt-8 w-32 text-white"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export function SelectedDeleteButton({ onClick, children }) {
  return (
    <>
      <button
        className="bg-green-500 p-2 rounded-md font-semibold text-white w-56 el"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

