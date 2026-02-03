import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "/img/iPhone14Pro.png",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
  },
  {
    id: 2,
    title: "Беспроводные наушники AirPro",
    price: 4990,
    category: "Аудио",
    image: "/img/iPhone14Pro.png",
    description: "Premium наушники с активным шумоподавлением. Время работы до 30 часов"
  }
];

export async function GET() {
  return NextResponse.json(products);
}
