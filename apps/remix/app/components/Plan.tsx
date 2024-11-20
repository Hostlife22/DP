import icon1 from "../assets/images/plan/icon1.png"
import icon2 from "../assets/images/plan/icon2.png"
import icon3 from "../assets/images/plan/icon3.png"
import { PlanUnit } from "./PlanUnit"

export const Plan = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="container">
        <div className="text-center font-semibold">
          <h3 className="text-2xl">Организуйте работу с нашей сельскохозяйственной техникой</h3>
          <h2 className="py-5 text-5xl">
            Быстрое и <span className="text-green-600">простое</span> бронирование
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 px-5 py-5 sm:grid-cols-2 md:grid-cols-3">
          <PlanUnit
            picture={icon1}
            header="Забронировать технику"
            paragraph="У нас доступен большой выбор сельскохозяйственной техники для ваших текущих задач. Просто выберите необходимую технику для следующей смены."
          />
          <PlanUnit
            picture={icon2}
            header="Связаться с оператором"
            paragraph="Наши знающие и дружелюбные операторы всегда готовы помочь в решении любых вопросов и проблем."
          />
          <PlanUnit
            picture={icon3}
            header="Поездка"
            paragraph="Если вам предстоит новая смена, мы уже подготовили для вас необходимую технику, чтобы ваша работа продолжалась без задержек."
          />
        </div>
      </div>
    </div>
  )
}
