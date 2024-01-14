import Image from "next/image";

import errorIcon from "/public/icon-error.svg";

interface SignUpFormInputProps {
  placeholder: string;
  value: string;
  error: boolean;
  type: string;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SignUpFormInput(props: SignUpFormInputProps) {
  return (
    <>
      <div className="flex flex-row justify-start items-center w-full">
        <input
          value={props.value}
          className={`w-full border-2 py-3.5 px-7 rounded-md font-semibold text-[0.9rem] placeholder:text-[0.9rem] placeholder:font-semi-bold leading-6 placeholder:leading-6 placeholder:text-neutralGrayish  ${
            props.error
              ? "border-primaryRed text-primaryRed"
              : "border-grayishBlue text-neutralBlue"
          }`}
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.changeHandler}
        />
        {props.error && (
          <div className="relative -m-12">
            <Image src={errorIcon.src} alt="" width={24} height={24} />
          </div>
        )}
      </div>
      {props.error && props.type != "email" && (
        <div className="italic flex justify-end text-primaryRed -mt-3 text-[0.7rem]">
          {props.placeholder} cannot be empty
        </div>
      )}
      {props.error && props.type == "email" && (
        <div className="italic flex justify-end text-primaryRed -mt-3 text-[0.7rem]">
          Looks like this is not an email
        </div>
      )}
    </>
  );
}
