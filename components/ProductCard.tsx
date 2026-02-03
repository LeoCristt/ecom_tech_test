import Image from "next/image";
import { ArrowRight } from 'lucide-react';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
    return (
        <div
            onClick={onClick}
            className="w-72 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 cursor-pointer">
            <div className="realtive h-52 bg-zinc-800">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={900}
                    height={900}
                    className="object-contain p-6"
                />
            </div>
            <div className="p-5">
                <h1 className="text-white mb-4 h-12 text-xl font-bold">
                    {product.title}
                </h1>
                <div className="flex items-center justify-between text-violet-500">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl">{product.price}</span>
                        <span className="text-lg">рублей</span>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}