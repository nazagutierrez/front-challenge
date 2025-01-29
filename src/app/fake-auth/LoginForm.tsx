import { LuAtSign } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { InputForm } from "./InputForm";

export const LoginForm = () => {
  return (
    <form className="space-y-7">
      <InputForm type="email"><LuAtSign /></InputForm>
      <InputForm type="password"><RiLockPasswordLine /></InputForm>
      <div className="flex flex-col w-full gap-5 !mt-5">
        <a
          href="#"
          className="w-fit text-sm self-end text-primary-darker/60 hover:underline hover:underline-offset-4"
        >
          Forgot your password?
        </a>
        <button className="sm:w-1/2 text-sm py-2 px-4 rounded-md self-center font-semibold bg-primary-darker/70 text-white hover:opacity-90 transition-all">
          LOGIN
        </button>
      </div>
    </form>
  );
};
