import { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const countryCodes = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
];

export default function Form() {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
  });
  const [countButton, setCountButton] = useState(0);
  const [button, setButton] = useState("Book Now");
  const [countryCode, setCountryCode] = useState(countryCodes[0].code);
  const [changeColor, setChangeColor] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const handleChangeModde = () => {
  //   setDarkMode(!darkMode);
  // };

  const handleButton = (e) => {
    e.preventDefault();
    function isNumber(value) {
      return !isNaN(Number(value));
    }

    const number = details.phone;
    const len = number.length;
    const phoneNumber = isNumber(number);
    if (len === 10 && phoneNumber) {
      setChangeColor(false);
      setButton("Book Again");
      setCountButton((prevCount) => prevCount + 1);
      alert("Details Received");
      setDetails({
        name: "",
        phone: "",
      });
    } else if (countButton >= 2) {
      setCountButton(2);
      setChangeColor(true);
    } else {
      alert("Invalid Phone Number");
      setCountButton(0);
      setChangeColor(true);
    }

    setDetails({
      name: "",
      phone: "",
    });
  };

  return (
    <div className=" flex flex-col items-center space-y-4">
      <div className="flex gap-4">
        {countButton <= 1 ? (
          <div className="flex gap-4">
            <div className="relative flex">
              <IoPerson className="absolute self-center ml-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={details.name}
                onChange={handleChange}
                className="px-7 py-1 border-2"
              />
            </div>
            <div className="relative flex">
              <label>
                <select
                  className="w-14 border-2 border-r-0 h-full"
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>
              </label>
              <div className="flex">
                <MdOutlineLocalPhone className="absolute self-center ml-2" />
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone*"
                  value={details.phone}
                  onChange={handleChange}
                  className="px-7 py-1 border-2 w-[11.56rem]"
                ></input>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-green-600 p-2 text-white">
            Your request has been sent. Expect a call in less than 1 minute.
          </div>
        )}
        <button
          onClick={handleButton}
          className={
            changeColor
              ? " bg-red-900 text-white px-4"
              : "bg-red-600 text-white px-4"
          }
        >
          {button}
        </button>
        {/* {darkMode ? (
          <MdLightMode className="" onClick={handleChangeModde} />
        ) : (
          <MdOutlineDarkMode
            className=""
            onClick={handleChangeModde}
          />
        )} */}
      </div>
      <div className="">
        <p>Call +91-8080808080</p>
      </div>
    </div>
  );
}

