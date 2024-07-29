export default function Info() {
  return (
    <>
      <div className="my-8 flex flex-col items-center">
        <h3 className="uppercase font-semibold text-xl p-4">
          Types of Ambulances
        </h3>
        <div className="flex justify-start w-full mb-6">
          <ul className="px-10 flex space-x-5">
            <div>
              <li className=" cursor-pointer">Patient Life Support</li>
              <div className="h-[1.5px] bg-black"></div>
            </div>
            <div>
              <li className="cursor-pointer">Advanced Life Support</li>
              <div></div>
            </div>
            <div>
              <li className=" cursor-pointer">Basic Life Support</li>
              <div></div>
            </div>
          </ul>
        </div>
        <div className="flex w-full">
          <ul className="w-1/3 pl-12">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-slate-600 rounded-full self-center"></div>
              <li className="text-slate-600">dawsas</li>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-slate-600 rounded-full self-center"></div>
              <li className="text-slate-600">dawsas</li>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-slate-600 rounded-full self-center"></div>
              <li className="text-slate-600">dawsas</li>
            </div>
          </ul>
          <div className="w-2/3 pr-12 flex">
            <div className="h-56 w-1/2 bg-zinc-400"></div>
            <div className="h-56 w-3 bg-white"></div>
            <div className="h-56 w-1/2 bg-fuchsia-600"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1.5px] bg-slate-500"></div>
    </>
  );
}
