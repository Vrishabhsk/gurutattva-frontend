export default function TemplateCard() {
  return (
    <div className="md:w-[50rem] md:h-[20.5rem] w-[90%] mx-auto my-20 h-[40rem] p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-700 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-[#5865F2] absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>FREE</h1>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl"></div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-[#5865F2]">Advanced</p>
        <h1 className="m-2 text-4xl font-bold dark:text-white">
          React Native with TypeScript tutorial.
        </h1>

        <div className=" pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-row items-center m-2">
            <h1 className="pl-1 dark:text-white">React Native</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <h1 className="pl-1 dark:text-white">TypeScript</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <h1 className="pl-1 dark:text-white">32 Hour</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <h1 className="pl-1 dark:text-white">5 Part</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
