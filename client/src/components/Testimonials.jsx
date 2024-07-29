import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const data = [
  {
    para: "Harry Potter is a series of seven fantasy novels written by British author J. K.Rowling.Bloomsbury in the United Kingdom and Scholastic Press in the United States. A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story.",
    author: "prabhat akhoon",
  },
  {
    para: "Bloodline is an American psychological thriller television series[1][2] created by Todd A. Kessler, Glenn Kessler, and Daniel Zelman, and produced by Sony Pictures Television.[3] The series premiered on February 9, 2015, in the Berlinale Special Galas section of the 65th Berlin International Film Festival",
    author: "prabhat",
  },
  {
    para: "In botany, a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves. In some usages, the definition of a tree may be narrower, including only woody plants with secondary growth, plants that are usable as lumber or plants above a specified height. In wider definitions",
    author: "prabhat",
  },
  {
    para: "The heart is a muscular organ found in most animals. This organ pumps blood through the blood vessels of the circulatory system.[1] The pumped blood carries oxygen and nutrients to the body, while carrying metabolic waste such as carbon dioxide to the lungs.[2] In humans, the heart is approximately the size",
    author: "prabhat",
  },
  {
    para: "Series of seven fantasy novels written by British author J. K.Rowling.Bloomsbury in the United Kingdom and Scholastic Press in the United States. A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story.",
    author: "prabhat",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const cardsToShow = 3;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const getDisplayData = () => {
    const displayData = [];
    for (let i = 0; i < cardsToShow; i++) {
      displayData.push(data[(current + i) % data.length]);
    }
    return displayData;
  };

  return (
    <div className="h-[300px] w-full flex justify-center my-10 overflow-hidden relative">
      <div className="w-[1200px] flex justify-center space-x-4 overflow-hidden items-center transition-transform ease-out duration-300">
        {getDisplayData().map((card, index) => (
          <div
            key={index}
            className={
              index % 2 !== 0
                ? "flex flex-col w-[380px] justify-evenly text-white bg-red-600 h-[250px] shadow-lg border-2 transition-transform ease-out duration-300"
                : "flex flex-col w-[380px] h-[250px] justify-evenly text-gray-500 shadow-lg border-2 transition-transform ease-out duration-300"
            }
          >
            <div className="flex flex-col relative">
              <div className="p-4 w-[380px] break-words">{card.para}</div>
              <div className="flex justify-end ">
                <div className=" px-4 bottom-0">{card.author}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full h-full justify-between items-center flex p-4">
        <BsArrowLeftCircleFill
          onClick={prevSlide}
          className="w-8 h-8 cursor-pointer text-slate-500"
        />
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="w-8 h-8 cursor-pointer text-slate-500"
        />
      </div>
    </div>
  );
}
