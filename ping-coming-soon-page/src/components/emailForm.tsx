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
    <div className="flex flex-col py-7 w-full">
      <form
        className="flex flex-col sm:flex-row justify-center items-center w-full"
        onSubmit={handleSubmit}
      >
        <input
          className={`${
            error ? "border-secondaryRed" : "border-gray"
          } w-full sm:w-2/3 z-30 bg-transparent placeholder:text-gray py-[1rem] px-8 rounded-[2rem] border`}
          placeholder="Your email address..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
        />
        <button className="text-white ml-0 sm:ml-4 text-sm sm:text-base p-[1rem] w-full  sm:w-[12.7rem] shadow-2xl whitespace-nowrap shadow-secondaryBlue rounded-[2rem] bg-primaryBlue hover:bg-secondaryBlue duration-200 ease-out transition-all">
          Notify Me
        </button>
      </form>
      {error && (
        <p className="absolute px-8 text-xs text-secondaryRed">
          <div className="relative top-16">
            Please provide a valid email address
          </div>
        </p>
      )}
    </div>
  );
}
