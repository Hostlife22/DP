import aboutPicture from "../assets/images/about/about-main.jpg"
import icon1 from "../assets/images/about/icon1.png"
import icon2 from "../assets/images/about/icon2.png"
import icon3 from "../assets/images/about/icon3.png"

export const AboutCompany = () => {
  return (
    <div className="container flex mx-auto flex-col gap-8 py-20 lg:flex-row max-w-[70rem]">
      <div className="flex justify-center flex-shrink-0 items-center">
        <img src={aboutPicture} alt="man showing a catalogue" />
      </div>
      <div className="flex flex-col text-center lg:text-start">
        <h4 className=" text-2xl font-semibold">О предприятии</h4>
        <h2 className="py-5 text-5xl font-semibold">К чему стремиться – знаем, на что делать упор в своей работе – тоже</h2>
        <p className="py-3 text-gray2">
        Cтратегия развития ОАО «Ружаны-Агро» - это увеличение достигнутых финансовых результатов работы, эффективное использование производственных мощностей, 
        совершенствование технико-экономического уровня производства и энерготехнической оснащенности труда, 
        постоянное наращивание производственного потенциала предприятия не только на основе роста объемов производства сельскохозяйственной продукции, но и повышения качества производимой продукции, 
        а также повышение эффективности использования всех ресурсов. 
        </p>
        <div className="flex justify-center gap-12 pt-6 xs:flex-row lg:justify-start">
          <div className="flex flex-col items-center gap-2">
            <img className="h-[75px]" src={icon1} alt="car icon" />
            <p className="text-5xl font-bold">20</p>
            <p className="text-gray2 text-center">Зерноуборочных комбайна</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src={icon2} alt="car garage icon" />
            <p className="text-5xl font-bold">8</p>
            <p className="text-gray2 text-center">Кормоуборочных комбайна</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src={icon3} alt="car service icon" />
            <p className="text-5xl font-bold">3</p>
            <p className="text-gray2 text-center">Картофелеуборочных комбайна</p>
          </div>
        </div>
      </div>
    </div>
  )
}
