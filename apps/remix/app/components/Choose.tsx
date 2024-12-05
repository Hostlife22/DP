import arrowRight from "../assets/icons/arrow-right.png"
import icon1 from "../assets/images/chooseUs/icon1.png"
import icon2 from "../assets/images/chooseUs/icon2.png"
import icon3 from "../assets/images/chooseUs/icon3.png"
import car from "../assets/images/chooseUs/main.png"
import { ChooseUnit } from "./ChooseUnit"

export const Choose = () => {
  return (
    <div className="bg-choose bg-left-bottom bg-no-repeat flex justify-center">
      <div className="container">
        <div className="flex justify-center pb-20">
          <img className="w-full lg:w-[80%]" src={car} alt="three cars" />
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col items-center justify-center lg:w-fit">
            <h3 className="text-center text-2xl font-semibold">Почему выбирают нас?</h3>
            <h2 className="py-5 text-center text-5xl font-semibold">
              Лучшие <span className="text-green-600">предложения</span> на рынке сельскохозяйственной техники
            </h2>
            <p className="py-3 text-gray2">
            Откройте для себя уникальные условия аренды техники в ОАО "Ружаны-Агро". Мы предлагаем лучшие варианты аренды сельскохозяйственной техники, которые обеспечат вас надежными условиями. Наша техника надёжна, высокоэффективна и доступна для всех сотрудников коллектива, что позволит сделать прозрачность и повысить производительность. Мы стремимся, чтобы каждый водитель получил максимум комфорта от работы с нами.
            </p>
            <button
              className="my-5 flex min-w-[163px] items-center gap-1 rounded bg-green-600 hover:bg-green-700 active:bg-green-800 px-7 py-4 font-medium text-white shadow-lg shadow-lime-700 transition-all hover:opacity-80"
              onClick={() => window.scrollTo(0, 0)}
            >
              Узнать подробности
              <img className="inline-block w-4" src={arrowRight} alt="arrow right" />
            </button>
          </div>
          <div className="flex flex-col gap-10 py-10">
            <ChooseUnit
              picture={icon1}
              header="Проффесионал на технике"
              paragraph="Поднимите свою эффективность на новый уровень с нашими высококлассными сельскохозяйственными машинами, идеально подходящими для любых задач в поле."
            />
            <ChooseUnit
              picture={icon2}
              header="Застрахованная техника"
              paragraph='Вся наша техника полностью застрахована, что гарантирует вам дополнительную безопасность и уверенность при работе на поле..'
            />
            <ChooseUnit
              picture={icon3}
              header="Полная готовность техники"
              paragraph="Вся техника будет готова к работе в вашей следующей смене. Мы обеспечиваем своевременную подготовку и обслуживание, чтобы ваша работа шла без перебоев."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
