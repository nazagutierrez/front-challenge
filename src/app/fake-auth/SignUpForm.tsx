import { LuAtSign } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { InputForm } from "./InputForm";

export const SignUpForm = () => {
  return (
    <form className="space-y-7">
      <InputForm type="name"><FiUser /></InputForm>
      <InputForm type="email"><LuAtSign /></InputForm>
      <InputForm type="password"><RiLockPasswordLine /></InputForm>
      <div className="flex flex-col w-full gap-5 !mt-5">
        <a
          href="#"
          className="w-fit text-sm self-end text-blue-600 hover:underline hover:underline-offset-4"
        >
          Forgot your password?
        </a>
        <button className="w-1/2 text-sm py-2 rounded-md self-center font-semibold bg-cyan-800 text-white hover:opacity-90 transition-all">
          REGISTER
        </button>
      </div>
    </form>
  );
};
