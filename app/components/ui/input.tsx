"use client";

import React, { useId, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  id,
  type = "text",
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const isPassword = type === "password";
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={isPassword ? "relative" : undefined}>
      <label
        htmlFor={inputId}
        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50"
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          aria-label={isVisible ? "Hide password" : "Show password"}
          aria-pressed={isVisible}
          className="absolute top-1 right-2 p-0.5 flex cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4.5 fill-slate-400 text-slate-400 overflow-visible"
            viewBox="0 0 128 128"
          >
            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
            {!isVisible && (
              <path
                d="M15 15l98 98"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                className="stroke-slate-400"
              />
            )}
          </svg>
        </button>
      )}

      <input
        id={inputId}
        type={isPassword ? (isVisible ? "text" : "password") : type}
        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600"
        {...props}
      />
    </div>
  );
}
