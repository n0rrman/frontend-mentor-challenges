"use client";

import Image from "next/image";

import { useState, FormEvent } from "react";

export default function EmailForm() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLInputElement>): any => {
    setError(!error);
    event.preventDefault();
    console.log("submitted!");
  };

  const handleChange = (value: string) => {
    setInput(value);
    console.log(value);
  };

  return (
    <div className="flex flex-col">
      <form className="flex flex-row items-center" onSubmit={handleSubmit}>
        <input
          className={`${
            error ? "border-secondaryRed" : "border-secondaryBlue"
          } w-full z-30 bg-transparent placeholder:text-secondaruBlue py-[0.94rem] px-8 rounded-[2rem] border`}
          placeholder="Your email address..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
        />
        <button className="text-white text-sm py-2 shadow-2xl px-12 rounded-[2rem] bg-primaryBlue hover:bg-secondaryBlue duration-200 ease-out transition-all">
          Notify Me
        </button>
      </form>
      {error && (
        <p className="px-8 py-3 text-sm text-secondaryRed">
          Please provide a valid email
        </p>
      )}
    </div>
  );
}
