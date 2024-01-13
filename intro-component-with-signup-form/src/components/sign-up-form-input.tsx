interface SignUpFormInputProps {
  placeholder: string;
  value: string;
  error: boolean;
  type: string;
  changeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function SignUpFormInput(props: SignUpFormInputProps) {
  return (
    <input
      value={props.value}
      className={`border-2 p-3 rounded-md ${
        props.error
          ? "border-primaryRed text-primaryRed"
          : "border-grayishBlue text-neutralBlue"
      }`}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.changeHandler}
    />
  );
}
