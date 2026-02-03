import Image from "next/image";
import { X } from 'lucide-react';
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 10);

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);


    const handleBack = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleBuy = () => {
        alert(`Товар "${product.title} добавлен в корзину"`);
        onClose();
    };


    return (
        <div
            onClick={handleBack}
            className={`fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`bg-zinc-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto border border-zinc-800 relative transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200 cursor-pointer"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="relative h-96 bg-zinc-800 rounded-lg">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={900}
                            height={900}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>

                    <div className="flex flex-col">
                        <h2 className="text-white text-2xl font-semibold mb-6">
                            {product.title}
                        </h2>

                        <p className="text-white/60 text-base leading-relaxed mb-auto">
                            {product.description}
                        </p>

                        <div className="flex flex-col gap-4 mt-8">
                            <div className="flex items-baseline gap-2">
                                <span className="text-violet-500 text-4xl font-bold">
                                    {product.price}
                                </span>
                                <span className="text-violet-500 text-2xl">рублей</span>
                            </div>

                            <button
                                onClick={handleBuy}
                                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold text-lg py-4 rounded-lg transition-colors duration-200">
                                Купить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}