import { ReactElement } from "react"

import arrowRight from "../assets/icons/arrow-right.png"
import checkmark from "../assets/icons/checkmark.png"
import heroBackground from "../assets/images/hero/hero-bg.png"
import heroCar from "../assets/images/hero/main-car.png"

export const Hero = (): ReactElement => {
  return (
    <div className="">
      <div className="absolute right-0 top-0 z-10">
        <img src={heroBackground} alt="city skyscrapers" />
      </div>
      <div className="container flex pb-12 pt-20 m-auto">
        <div className="z-10 flex flex-col items-center py-4 md:max-w-md md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-bold">Организуйте работу с нашей сельскохозяйственной техникой</h4>
            <h1 className="pb-6 pt-2 text-center text-[3.25rem] font-extrabold leading-tight md:text-left">
            Бронируйте технику для <span className="text-green-600">ваших задач</span> на следующие дни
            </h1>
            <p className="pb-10 text-center text-gray2 md:text-left">
            Упростите процесс планирования и распределения сельскохозяйственной техники для рабочих. Система автоматизации логистики позволяет легко согласовывать выдачу и бронирование техники на нужные дни, обеспечивая бесперебойную работу предприятия.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 font-medium xs:flex-nowrap">
            <a href="#booking-section">
              <button className="flex min-w-[163px] items-center gap-1 rounded bg-green-600 hover:bg-green-700 active:bg-green-800 px-7 py-4 text-white shadow-lg shadow-lime-700 transition-all duration-300 hover:opacity-80">
                Забронировать выезд
                <img className="w-6" src={checkmark} alt="check mark sign" />
              </button>
            </a>
          </div>
        </div>
        <div className="z-10 hidden md:flex md:items-end">
          <img src={heroCar} alt="bmw car" />
        </div>
      </div>
    </div>
  )
}
