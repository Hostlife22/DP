import { testimonials } from "../data/AllData"
import { TestimonialsPost } from "./TestimonialsPost"

export const Testimonials = () => {
  return (
    <div className="container py-20 mx-auto">
      <div className="text-center">
        <h3 className="text-2xl font-semibold">Проверено людьми</h3>
        <h2 className="py-5 text-5xl font-semibold">
          Отзывы <span className="text-green-600">работников</span>
        </h2>
        <p className="py-3 text-gray2">
        Узнайте, как наша техника и поддержка помогли вашим коллегам справляться с задачами быстрее и эффективнее. 
        Работники уже оценили удобство нашей системы бронирования и надёжность техники, и готовы поделиться своим опытом, чтобы помочь вам в организации следующих смен.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 py-10 lg:flex-row">
        {testimonials.map((testimonial) => (
          <TestimonialsPost
            author={testimonial.author}
            opinion={testimonial.opinion}
            picture={testimonial.picture}
            place={testimonial.place}
            key={testimonial.id}
          />
        ))}
      </div>
    </div>
  )
}
