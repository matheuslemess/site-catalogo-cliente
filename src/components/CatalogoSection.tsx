// components/CatalogoSection.tsx
'use client';
import Image from 'next/image';
import { products } from '../data/products'; // O caminho para 'data' a partir de 'components' é '../'

// Definimos os tipos para o produto e para as props que o componente vai receber
type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type CatalogoProps = {
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (productId: number) => void;
  isInCart: (productId: number) => boolean;
};

// O componente agora recebe a lógica do carrinho de fora (via props)
export default function CatalogoSection({ handleAddToCart, handleRemoveFromCart, isInCart }: CatalogoProps) {
  return (
    // Adicionamos um 'id' para que a navegação da página única encontre esta seção
    <section id="catalogo" className="bg-[#FEFBF3] min-h-screen p-4 sm:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-[#5C3342]">
          Nosso Catálogo
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2 font-sans">
          Adicione os produtos de seu interesse ao carrinho.
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            const itemInCart = isInCart(product.id);

            return (
              <div key={product.id} className="flex flex-col ">
                {/* CARD */}
                <div
                  className={`overflow-hidden group transition-all   ${
                    itemInCart
                      ? "border-2 border-[#1d599f]"
                      : "rounded-lg border"
                  }`}
                >
                  {/* IMAGEM */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={product.image}
                      alt={`Imagem do produto ${product.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* BOTÃO FORA DO CARD */}
                <div className="mt-2">
                  {/* NOME + PREÇO */}
                  <div className="p-4">
                    <h2 className="text-lg text-gray-800 font-serif truncate">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 mt-1">{product.price}</p>
                  </div>
                  {!itemInCart ? (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-[#1d599f] rounded-md text-white font-lora text-sm font-semibold py-2 px-4 transition-all"
                    >
                      Adicionar ao carrinho
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRemoveFromCart(product.id)}
                      className="w-full bg-gray-600 rounded-md text-white font-sans text-sm font-semibold py-2 px-4 transition-all"
                    >
                      Remover do carrinho
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
}