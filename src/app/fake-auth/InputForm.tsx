type InputFormType = "email" | "name" | "password";

export const InputForm = ({ type, children }:{type: InputFormType;children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col">
      <label className="text-gray-300 capitalize text-sm mb-2" htmlFor={type}>
        {type}
      </label>
      <input
        id={type}
        type="text"
        placeholder={type}
        className="w-full capitalize rounded-md border-grey/60 border px-5 py-2 shadow-sm sm:text-sm"
      />
      <span className="pointer-events-none absolute p-[10px] right-0 bottom-0 text-grey">
        {children}
      </span>
    </div>
  );
};
