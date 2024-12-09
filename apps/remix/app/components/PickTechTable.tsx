import { PickTechTableField } from "./PickTechTableField"

interface PickTechTableProps {
  cost: string
  brand: string
  model: string
  year: string
  Privod: string
  ac: string
  transmission: string
  fuel: string
}

export const PickTechTable = ({ cost, brand, model, year, Privod, ac, transmission, fuel }: PickTechTableProps) => {
  return (
    <div className="flex min-w-[350px] flex-col">
      <div className="bg-green-600 px-4 py-1 text-center text-lg text-white">
        <span className="text-2xl font-medium">Характеристика</span>
      </div>
      <PickTechTableField label="Бренд" value={brand} />
      <PickTechTableField label="Модель" value={model} />
      <PickTechTableField label="Год" value={year} />
      <PickTechTableField label="Привод" value={Privod} />
      <PickTechTableField label="AC" value={ac} />
      <PickTechTableField label="Трансмиссия" value={transmission} />
      <PickTechTableField label="Топливо" value={fuel} />

      <a href="#booking-section">
        <button className="mt-5 w-full rounded bg-green-600 hover:bg-green-700 active:bg-green-800 px-4 py-2 text-xl text-white shadow-lg shadow-lime-700 transition-all duration-300 hover:opacity-80">
          Забронировать
        </button>
      </a>
    </div>
  )
}
