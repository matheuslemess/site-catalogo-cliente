// components/ContatoSection.tsx

export default function ContatoSection() {
  return (
    <section
      id="contato"
      className="relative min-h-screen w-full flex flex-col justify-center items-center p-8 font-sans bg-cover bg-center"
      style={{ backgroundImage: "url('./teste.jpeg')" }}
    >
      <div className="absolute inset-0 bg-opacity-50 z-0"></div>

      <div className="relative z-10 text-white w-full max-w-6xl flex flex-col justify-between h-full min-h-[70vh]">
        
        {/* Título com animação */}
        <h2 
          className="text-6xl md:text-8xl text-yellow-400 font-serif text-center animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Entre em contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center md:text-left">
          {/* Coluna 1 com animação */}
          <div 
            className="animate-fade-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">
              Instagram
            </p>
            <p className="text-lg">
             Country 12345
            </p>
          </div>

          {/* Coluna 2 com animação */}
          <div 
            className="animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">
              Email
            </p>
            <a href="mailto:hello@reallygreatsite.com" className="text-lg hover:underline">
              hello@reallygreatsite.com
            </a>
          </div>

          {/* Coluna 3 com animação */}
          <div 
            className="animate-fade-in-up" 
            style={{ animationDelay: '0.8s' }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">
              Whatsapp
            </p>
            <p className="text-lg">(123) 456 7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}