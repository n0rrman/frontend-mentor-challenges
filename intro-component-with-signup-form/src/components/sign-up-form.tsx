export default function SignUpForm() {
  async function signUp(formData: FormData) {
    "use server";
  }

  return (
    <form className="bg-white p-8 rounded-xl flex flex-col gap-5">
      <input placeholder="First Name" />
      <input placeholder="Last Name" />
      <input placeholder="Email Address" />
      <input placeholder="Password" />

      <button className="bg-primaryGreen w-full text-white">
        Claim your free trial
      </button>
      <div className="text-neutralGrayish text-xs">
        By clicking the button, you are agreeing to our{" "}
        <span className="text-primaryRed">Terms and Services</span>
      </div>
    </form>
  );
}
