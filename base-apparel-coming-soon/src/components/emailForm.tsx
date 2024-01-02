"use client";

import Image from "next/image";

import { useState, FormEventHandler, FormEvent } from "react";

import arrowIcon from "/public/icon-arrow.svg";
import errIcon from "/public/icon-error.svg";

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
    <div className="flex flex-col">
      <form className="flex flex-row items-center" onSubmit={handleSubmit}>
        <input
          className={`${
            error ? "border-softRed" : "border-desaturatedRed/75"
          } w-full z-30 bg-transparent placeholder:text-desaturatedRed/75 py-[0.94rem] px-8 rounded-[2rem] border`}
          placeholder="Email Address"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
        />
        <button
          className={`${
            error ? "-ml-[6.3rem]" : "-ml-24"
          } z-40 relative py-[1.1rem] shadow-xl px-[2.75rem] rounded-[2rem] bg-gradient-to-br from-gradTwoStart to-gradTwoEnd hover:bg-gradTwoStart hover:bg-none hover:shadow-2xl`}
        >
          <div className="relative w-3 h-5">
            <Image alt="submit" src={arrowIcon.src} fill />
          </div>
        </button>
        {error && (
          <div className="-ml-36 z-50 relative w-6 h-6">
            <Image alt="error" fill src={errIcon.src} />
          </div>
        )}
      </form>
      {error && (
        <p className="px-8 py-3 text-sm text-softRed">
          Please provide a valid email
        </p>
      )}
    </div>
  );
}
