import Image from "next/image";
import { X } from 'lucide-react';


export default function ProductModal() {
    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto border border-zinc-800 relative">
                <button

                    className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200 cursor-pointer"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="relative h-96 bg-zinc-800 rounded-lg">
                        <Image
                            src="/img/iPhone14Pro.png"
                            alt=""
                            width={900}
                            height={900}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-white text-2xl font-semibold mb-6">
                            Iphone 14
                        </h2>

                        <p className="text-white/60 text-base leading-relaxed mb-auto">
                            Описание Iphone 14
                        </p>

                        <div className="flex flex-col gap-4 mt-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-violet-500 text-4xl font-bold">
                                    123 444
                                </span>
                                <span className="text-violet-500 text-2xl">рублей</span>
                            </div>

                            <button className="w-full bg-violet-500 text-black font-semibold text-lg py-4 rounded-lg">
                                Купить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}