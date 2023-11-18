"use client";

import React, { useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div>
      {isDark ? (
        <button onClick={() => setIsDark(true)}>
          <CiLight className="text-2xl cursor-pointer" />
        </button>
      ) : (
        <button onClick={() => setIsDark(false)}>
          <CiDark className="text-2xl cursor-pointer" />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
