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
    setFirstnameError(firstname.length < 1);
    setLastnameError(lastname.length < 1);
    setEmailError(!validateEmail(email));
    setPasswordError(password.length < 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-8 rounded-xl flex flex-col gap-5 w-full"
    >
      <input
        value={firstname}
        className={`border-2 p-3 rounded-md focus:border-primaryBlue ${
          firstnameError
            ? "border-primaryRed text-primaryRed"
            : "border-grayishBlue text-neutralBlue"
        }`}
        placeholder="First Name"
        onChange={(e) => handleChange(e, setFirstname, setFirstnameError)}
      />
      <input
        value={lastname}
        className={`border-2 p-3 rounded-md ${
          lastnameError
            ? "border-primaryRed text-primaryRed"
            : "border-grayishBlue text-neutralBlue"
        }`}
        placeholder="Last Name"
        onChange={(e) => handleChange(e, setLastname, setLastnameError)}
      />
      <input
        value={email}
        className={`border-2 p-3 rounded-md ${
          emailError
            ? "border-primaryRed text-primaryRed"
            : "border-grayishBlue text-neutralBlue"
        }`}
        placeholder="Email Address"
        onChange={(e) => handleChange(e, setEmail, setEmailError)}
      />
      <SignUpFormInput
        value={password}
        placeholder="Password"
        type="password"
        error={passwordError}
        changeHandler={(e) => handleChange(e, setPassword, setPasswordError)}
      />

      <button className="bg-primaryGreen w-full py-3.5 uppercase rounded-md text-white">
        Claim your free trial
      </button>
      <div className="text-neutralGrayish text-xs text-center">
        By clicking the button, you are agreeing to our{" "}
        <span className="text-primaryRed">Terms and Services</span>
      </div>
    </form>
  );
}
