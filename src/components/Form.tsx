const Form = () => {
  return (
    <form className="flex items-center gap-4 py-20 px-16  w-full">
      <input
        type="text"
        className="border border-gray-300 py-2 px-4 rounded-md shadow-md  w-[75%]"
      />{" "}
      <button className=" duration-300 transition-all hover:bg-slate-800 bg-black text-white font-medium cursor-pointer rounded-md py-2 px-2 w-[25%]">
        +Add ingredient
      </button>
    </form>
  );
};

export default Form;
