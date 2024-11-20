import audi1 from "../assets/images/cars-big/audi-box.png"
import audi2 from "../assets/images/cars-big/audia1.jpg"
import mercedes1 from "../assets/images/cars-big/benz-box.png"
import mercedes2 from "../assets/images/cars-big/benz.jpg"
import bmw1 from "../assets/images/cars-big/bmw-box.png"
import bmw2 from "../assets/images/cars-big/bmw320.jpg"
import golf1 from "../assets/images/cars-big/golf6-box.png"
import golf2 from "../assets/images/cars-big/golf6.jpg"
import cc1 from "../assets/images/cars-big/passat-box.png"
import cc2 from "../assets/images/cars-big/passatcc.png"
import camry1 from "../assets/images/cars-big/toyota-box.png"
import camry2 from "../assets/images/cars-big/toyotacamry.jpg"

import miller from "../assets/images/team/1.png"
import diaz from "../assets/images/team/2.png"
import ross from "../assets/images/team/3.png"
import rivera from "../assets/images/team/4.png"
import rizz from "../assets/images/team/5.png"
import hunt from "../assets/images/team/6.png"

import johnDoe from "../assets/images/team/5.png"
import janeDoe from "../assets/images/team/6.png"

// VEHICLES
export const vehicles = [
  {
    id: 1,
    brand: "МТЗ",
    model: "Беларус",
    line: "82.1",
    Privod: "4х4",
    transmission: "Механическая",
    fuel: "Дизель",
    cost: "$45",
    image1: audi1,
    image2: audi2,
    ac: "yes",
    year: "2000",
  },

  {
    id: 2,
    brand: "Volkswagen",
    model: "Golf",
    Privod: "4/5",
    transmission: "automatic",
    fuel: "Diesel",
    cost: "$37",
    image1: golf1,
    image2: golf2,
    ac: "yes",
    year: "2008",
  },

  {
    id: 3,
    brand: "Toyota",
    model: "Camry",
    Privod: "4/5",
    transmission: "manual",
    fuel: "Petrol",
    cost: "$30",
    image1: camry1,
    image2: camry2,
    ac: "yes",
    year: "2006",
  },
  {
    id: 4,
    brand: "BMW",
    model: "320",
    line: "Modern-Line",
    Privod: "4/5",
    transmission: "automatic",
    fuel: "Diesel",
    cost: "$35",
    image1: bmw1,
    image2: bmw2,
    ac: "yes",
    year: "2012",
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "GLK",
    Privod: "4/5",
    transmission: "automatic",
    fuel: "Diesel",
    cost: "$50",
    image1: mercedes1,
    image2: mercedes2,
    ac: "yes",
    year: "2006",
  },
  {
    id: 6,
    brand: "Volkswagen",
    model: "Passat CC",
    Privod: "4/5",
    transmission: "automatic",
    fuel: "Petrol",
    cost: "$25",
    image1: cc1,
    image2: cc2,
    ac: "yes",
    year: "2008",
  },
]

// PEOPLE
export const people = [
  {
    id: 1,
    name: "Босак Андрей Иванович",
    position: "Руководитель",
    image: diaz,
  },
  {
    id: 2,
    name: "Костюк Илья Викторович",
    position: "Отдел маркетинга, торговли и сбыта",
    image: miller,
  },
  {
    id: 3,
    name: "Рябцева Яна Викторовна",
    position: "Главный бухгалтер",
    image: ross,
  },
  {
    id: 4,
    name: "Бугаенко Критина Анатольевна",
    position: "Зам. главного бухгалтера",
    image: rivera,
  },
  {
    id: 5,
    name: "Чилей Дима",
    position: "Механик",
    image: rizz,
  },
  {
    id: 6,
    name: "Полуянчик Виталик",
    position: "Менеджер",
    image: hunt,
  },
  {
    id: 7,
    name: "Полуянчик Виталик",
    position: "Менеджер",
    image: hunt,
  },
  {
    id: 8,
    name: "Полуянчик Виталик",
    position: "Менеджер",
    image: hunt,
  },
  {
    id: 9,
    name: "Полуянчик Виталик",
    position: "Менеджер",
    image: hunt,
  },
]

// FAQ
export const faq = [
  {
    id: 1,
    question: "Что особенного в сравнении предложений по аренде техники?",
    answer:
      "Сравнение предложений по аренде техники очень важно, так как помогает вам выбрать лучший вариант, который соответствует вашим потребностям и требованиям. Это позволяет вам получить наилучшие условия аренды и выбрать наиболее подходящую технику для выполнения ваших задач. Обращая внимание на разные варианты, вы можете найти предложения с уникальными характеристиками и дополнительными услугами. Исследуя информацию на нашем сайте и сравнивая предложения от различных поставщиков, вы сможете сделать обоснованный выбор.",
  },
  {
    id: 2,
    question: "Как забронировать технику?",
    answer:
      "Чтобы забронировать технику, просто выберите необходимую модель на нашем сайте, укажите дату и время аренды, а также продолжительность использования. После этого вы сможете подтвердить бронь и получить все необходимые детали по вашему заказу. Процесс интуитивно понятен и не займет много времени.",
  },
  {
    id: 3,
    question: "Что делать, если у меня возникли проблемы с арендованной техникой?",
    answer:
      "Если у вас возникли проблемы с арендованной техникой, обратитесь к нашей службе поддержки. Мы готовы помочь вам в любое время. Наша команда обеспечит быструю помощь, чтобы минимизировать простои и обеспечить продолжение вашей работы.",
  },
]

// LOCATIONS
export const locations = ["Cracow", "Gdansk", "Poznan", "Warsaw", "Wroclaw"]

// TESTIMONIALS
export const testimonials = [
  {
    id: 1,
    author: "Платонов Иван",
    opinion:
      "Работаю на этой технике уже несколько месяцев, и всё проходит на высшем уровне! Бронирование простое и быстрое, техника всегда готова к началу смены. Очень нравится, что всё застраховано, и можно сосредоточиться только на работе.",
    place: "Павлово, Брестская область",
    picture: johnDoe,
  },
  {
    id: 2,
    author: "Бугаенко Кристина",
    opinion:
      "Отличный сервис! Каждая смена проходит без проблем — техника всегда в отличном состоянии и полностью подготовлена. Удобно, что всё забронировано заранее, это делает работу гораздо проще",
    place: "Лысково, Брестская область",
    picture: janeDoe,
  },
]
