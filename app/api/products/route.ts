import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "/img/product1.png",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор. Отслеживание активности и здоровья."
  },
  {
    id: 2,
    title: "Iphone 14 Pro",
    price: 4990,
    category: "Техника",
    image: "/img/product2.png",
    description: "Premium смартфон"
  },
  {
    id: 3,
    title: "Портативная колонка SoundMax",
    price: 3490,
    category: "Аудио",
    image: "/img/product3.png",
    description: "Мощный звук 360°, водонепроницаемость IPX7, время работы 12 часов."
  },
  {
    id: 4,
    title: "Фитнес-браслет FitTrack Pro",
    price: 2990,
    category: "Гаджеты",
    image: "/img/product4.png",
    description: "Мониторинг сердечного ритма, сна и активности. Уведомления со смартфона."
  },
  {
    id: 5,
    title: "Беспроводное зарядное устройство",
    price: 1490,
    category: "Аксессуары",
    image: "/img/product5.png",
    description: "Быстрая зарядка 15W, совместимость с iPhone и Android устройствами."
  },
  {
    id: 6,
    title: "Умная лампа SmartLight",
    price: 2490,
    category: "Умный дом",
    image: "/img/product6.png",
    description: "16 миллионов цветов, управление через приложение, голосовое управление."
  }
];

export async function GET() {
  return NextResponse.json(products);
}
