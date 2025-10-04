"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CatalogoSection from "@/components/CatalogoSection";
import ContatoSection from "@/components/ContatoSection";

// Definimos o tipo de um item de Produto
type Product = { id: number; name: string; price: string; image: string };

// --- COMPONENTE DA BARRA DE NAVEGAÇÃO ---
// const Navbar = () => (
//   <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-sm shadow-md z-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex items-center justify-between h-12">
//         <div className="flex-shrink-0 text-lg text-[#5C3342] font-serif">
//           <a href="#home">L.S. PRATAS 923</a>
//         </div>
//         <div className="hidden md:block">
//           <div className="ml-10 flex items-baseline space-x-4 font-serif">
//             <a
//               href="#home"
//               className="text-gray-600 hover:text-[#5C3342] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Home
//             </a>
//             <a
//               href="#catalogo"
//               className="text-gray-600 hover:text-[#5C3342] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Catálogo
//             </a>
//             <a
//               href="#contato"
//               className="text-gray-600 hover:text-[#5C3342] px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Contato
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </nav>
// );

// --- PÁGINA PRINCIPAL QUE JUNTA TUDO ---
export default function HomePage() {
  // A lógica do carrinho agora vive aqui, na página principal
  const WHATSAPP_NUMBER = "5567999999999";
  const [cart, setCart] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) =>
    setCart((prev) => [...prev, product]);
  const handleRemoveFromCart = (productId: number) =>
    setCart((prev) => prev.filter((item) => item.id !== productId));
  const isInCart = (productId: number) =>
    cart.some((item) => item.id === productId);

  const handleSendWhatsApp = () => {
    let message = "Olá! Tenho interesse nos seguintes produtos:\n\n";
    cart.forEach((item) => {
      message += `- ${item.name} (${item.price})\n`;
    });
    message += "\nAguardo o contato!";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      {/* <Navbar /> */}
      <main>
        {/* --- SEÇÃO 1: HOME PAGE COM O NOVO LAYOUT --- */}
        <section
          id="home"
          className="relative flex flex-col items-center justify-center min-h-screen text-center text-white"
        >
          {/* Imagem de Fundo */}
          <Image
            src="/pra1.svg" // <-- COLOQUE SUA NOVA IMAGEM DE FUNDO AQUI
            alt="Modelo de fundo da coleção"
            fill
            priority
            className="object-cover z-0"
          />
          {/* Sobreposição Escura */}
          <div className="absolute inset-0 bg-opacity-40 z-10"></div>

          {/* Conteúdo de Texto */}
          <div className="relative z-20 p-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl text-yellow-300 font-serif-display uppercase">
              Laureane Simões
            </h2>
            <p className="mt-4 text-lg font-sans text-yellow-300">
              Coleção Prata 923
            </p>
            <Link
              href="#catalogo"
              className="mt-8 inline-block text-yellow-300 font-sans tracking-widest uppercase text-sm hover:text-yellow-300 transition-colors underline underline-offset-4"
            >
              VER CATÁLOGO
            </Link>
          </div>
        </section>

        {/* --- SEÇÃO 2: CATÁLOGO (Inalterado) --- */}
        <CatalogoSection
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          isInCart={isInCart}
        />

        {/* --- SEÇÃO 3: CONTATO (Inalterado) --- */}
        <ContatoSection />
      </main>

      {/* O Botão Flutuante do Carrinho (Inalterado) */}
      {cart.length > 0 && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={handleSendWhatsApp}
            className="bg-green-700 text-white font-bold py-3 px-4 md:py-4 md:px-6 rounded-md shadow-lg hover:scale-105 transition-transform flex items-center gap-3"
          >
            <span className="text-base md:text-lg">
              Comprar ({cart.length})
            </span>
          </button>
        </div>
      )}
    </>
  );
}
