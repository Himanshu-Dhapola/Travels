import { GoClockFill } from "react-icons/go";

export default function Tags() {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 my-10">
        <div>
          <p className="text-black uppercase font-semibold text-xl">
            Why Choose Us?
          </p>
        </div>
        <div className="flex justify-center space-x-5 w-56">
          <div className="flex flex-col">
            <GoClockFill className="w-28 h-28 self-center" />
            <div className="text-center w-56">
              <p className="font-semibold">24/7 Availability</p>
              <p className="text-gray-500">
                Loremqewe e qwe q ewq eqweweqweqwewq eqw ewe qwe ew eq
                ewqewqeqwewe
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <GoClockFill className="w-28 h-28 self-center" />
            <div className="text-center w-56">
              <p className="font-semibold">24/7 Availability</p>
              <p className="text-gray-500">
                Loremqewe e qwe q ewq eqweweqweqwewq eqw ewe qwe ew eq
                ewqewqeqwewe
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <GoClockFill className="w-28 h-28 self-center" />
            <div className="text-center w-56">
              <p className="font-semibold">24/7 Availability</p>
              <p className="text-gray-500">
                Loremqewe e qwe q ewq eqweweqweqwewq eqw ewe qwe ew eq
                ewqewqeqwewe
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <GoClockFill className="w-28 h-28 self-center" />
            <div className="text-center w-56">
              <p className="font-semibold">24/7 Availability</p>
              <p className="text-gray-500">
                Loremqewe e qwe q ewq eqweweqweqwewq eqw ewe qwe ew eq
                ewqewqeqwewe
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-500"></div>
    </>
  );
}
