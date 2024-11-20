import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <div className="container py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center">
              <h5 className="text-2xl font-medium">
                Аренда <span className="font-normal">техники</span>
              </h5>
              <p className="py-2 text-center text-gray2">
              Мы предлагаем широкий выбор сельскохозяйственной техники для всех ваших нужд. У нас вы найдёте идеальные решения, 
              которые полностью соответствуют вашим требованиям и помогут эффективно выполнять задачи в поле.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-2">
              <a href="tel:123-456-789" className="transition-all hover:text-green-600">
                <div className="flex w-fit justify-center gap-2">
                  <div className="w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>

                  <div>
                    <p className="font-medium">+375 (29)-200-7890</p>
                  </div>
                </div>
              </a>
              <a href="mailto:ruzhanu-agro@mail.ru" className="transition-all hover:text-green-600">
                <div className="flex justify-center gap-2">
                  <div className="w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                      <path d="M3 7l9 6l9 -6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium ">ruzhanu-agro@mail.ru</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          

          <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <h5 className="pb-2 text-center text-2xl font-medium">ЧАСЫ РАБОТЫ</h5>
              <ul className="whitespace-nowrap p-2 text-center">
                <li className="pb-2">Пн - Пт: 9:00 - 21:00</li>
                <li className="pb-2">Сб: 9:00 - 19:00</li>
                <li className="pb-2">Вс: Выходной</li>
              </ul>
            </div>
          </div>

          
        </div>
      </div>
    </footer>
  )
}
