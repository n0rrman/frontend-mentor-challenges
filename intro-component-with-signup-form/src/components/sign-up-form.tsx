"use client";

import { FormEvent, useState } from "react";
import SignUpFormInput from "./sign-up-form-input";

export default function SignUpForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (
    event: FormEvent<HTMLInputElement>,
    setFunc: Function,
    setError: Function
  ) => {
    setFunc(event.currentTarget.value);
    setError(false);
  };

  const validateEmail = (email: string): boolean => {
    if (email.length <= 0) return false;
    if (email.indexOf("@") < 0) return false;
    if (email.indexOf(".") < 0) return false;
    if (email.lastIndexOf(".") == email.length - 1) return false;
    if (email.indexOf("@") > email.lastIndexOf(".")) return false;

    return true;
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setFirstnameError(firstname.trim().length < 1);
    setLastnameError(lastname.trim().length < 1);
    setEmailError(!validateEmail(email.trim()));
    setPasswordError(password.trim().length < 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-5 md:p-10 rounded-xl flex flex-col gap-5 w-full shadow-[0px_8px_0px_0px_rgba(0,0,0,0.15)]"
    >
      <SignUpFormInput
        value={firstname}
        placeholder="First Name"
        type="text"
        error={firstnameError}
        changeHandler={(e) => handleChange(e, setFirstname, setFirstnameError)}
      />
      <SignUpFormInput
        value={lastname}
        placeholder="Last Name"
        type="text"
        error={lastnameError}
        changeHandler={(e) => handleChange(e, setLastname, setLastnameError)}
      />
      <SignUpFormInput
        value={email}
        placeholder="Email Address"
        type="email"
        error={emailError}
        changeHandler={(e) => handleChange(e, setEmail, setEmailError)}
      />
      <SignUpFormInput
        value={password}
        placeholder="Password"
        type="password"
        error={passwordError}
        changeHandler={(e) => handleChange(e, setPassword, setPasswordError)}
      />

      <button className="bg-primaryGreen w-full py-3.5 uppercase rounded-md leading-[1.5rem] tracking-wider text-[0.975rem] text-white border-[#52bc8e] border border-b-4 hover:cursor-pointer hover:bg-primaryGreen/75 transition duration-200 ease-in-out">
        Claim your free trial
      </button>
      <div className="text-neutralGrayish text-[0.68rem] -mt-2 mb-1 text-center">
        By clicking the button, you are agreeing to our{" "}
        <span className="text-primaryRed font-bold hover:cursor-pointer hover:text-primaryRed/75 transition duration-200 ease-in-out">
          Terms and Services
        </span>
      </div>
    </form>
  );
}
