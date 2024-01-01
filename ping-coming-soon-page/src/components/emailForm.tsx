"use client";

import { useState, FormEvent, FormEventHandler } from "react";

export default function EmailForm() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const validateEmail = (email: string): boolean => {
    if (email.length <= 0) return false;
    if (email.indexOf("@") < 0) return false;
    if (email.indexOf(".") < 0) return false;
    if (email.lastIndexOf(".") == email.length - 1) return false;
    if (email.indexOf("@") > email.lastIndexOf(".")) return false;

    return true;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validEmail = validateEmail(input);
    if (validEmail) {
      setInput("");
    }

    setError(!validEmail);
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  return (
    <div className="flex flex-col py-7 w-full">
      <form
        className="flex flex-col gap-2.5 sm:gap-0 sm:flex-row justify-center items-center w-full"
        onSubmit={handleSubmit}
      >
        <input
          className={`${
            error ? "border-secondaryRed" : "border-gray"
          } w-full sm:w-2/3 z-30 bg-transparent text-xs sm:text-base placeholder:text-gray p-3 sm:py-[0.95rem] px-8 rounded-[2rem] border`}
          placeholder="Your email address..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
        />
        {error && (
          <div className="relative sm:absolute px-0 sm:px-8 text-xs text-secondaryRed">
            <p className="relative sm:right-[11.5rem] sm:top-11">
              Please provide a valid email address
            </p>
          </div>
        )}
        <button
          className={`${
            error ? "mr-0" : "mr-0"
          } text-white ml-0 sm:ml-4 text-xs sm:text-base p-3 sm:p-[0.97rem] w-full sm:w-[12.7rem] shadow-lg whitespace-nowrap shadow-secondaryBlue rounded-[2rem] bg-primaryBlue hover:bg-secondaryBlue duration-200 ease-out transition-all`}
        >
          Notify Me
        </button>
      </form>
    </div>
  );
}
