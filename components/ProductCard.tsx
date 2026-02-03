import Image from "next/image";
import { ArrowRight } from 'lucide-react';

export default function ProductCard() {
    return (
        <div className="w-72 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
            <div className="realtive h-52 bg-zinc-800">
                <Image
                    src="/img/iPhone14Pro.png"
                    alt=""
                    width={900}
                    height={900}
                    className="object-contain p-6"
                />
            </div>
            <div className="p-5">
                <h1 className="text-white mb-4 h-12 text-xl line-clamp-2 font-bold">
                    Iphone 14
                </h1>
                <div className="flex items-center justify-between text-violet-500">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl">123 444</span>
                        <span className="text-lg">рублей</span>
                    </div>
                    <ArrowRight className="w-5 h-5" />
                </div>
            </div>
        </div>
    );
}