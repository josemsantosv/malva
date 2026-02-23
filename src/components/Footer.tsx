function Footer() {
  return (
    <footer 
      className="mt-auto text-white"
      style={{ backgroundColor: '#986675' }}
    >
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
          {/* Logo y tagline a la izquierda */}
          <div className="flex flex-col w-full md:w-auto items-center md:items-start">
            <img 
              src="/images/logofooter.png" 
              alt="Malva" 
              className="h-10 sm:h-12 md:h-16 mb-2"
            />
            <p className="text-white text-xs sm:text-sm md:text-base text-center md:text-left">
              Dónde las ideas toman color
            </p>
          </div>

          {/* Información de contacto a la derecha */}
          <div className="flex flex-col gap-3 md:gap-4 w-full md:w-auto">
            <a 
              href="https://instagram.com/malva.agencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-white hover:opacity-80 transition-opacity text-xs sm:text-sm md:text-base"
            >
              <img 
                src="/images/instagram.png" 
                alt="Instagram" 
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />
              <span className="break-all">@malva.agencia</span>
            </a>
            
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-white hover:opacity-80 transition-opacity text-xs sm:text-sm md:text-base"
            >
              <img 
                src="/images/facebook.png" 
                alt="Facebook" 
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />
              <span className="break-words text-center md:text-left">MALVA - Agencia Publicitaria</span>
            </a>
            
            <a 
              href="mailto:malvapubli@gmail.com"
              className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-white hover:opacity-80 transition-opacity text-xs sm:text-sm md:text-base"
            >
              <img 
                src="/images/gmail.png" 
                alt="Email" 
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />
              <span className="underline break-all">malvapubli@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
