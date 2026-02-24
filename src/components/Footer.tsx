function Footer() {
  return (
    <footer 
      className="mt-auto text-white"
      style={{ backgroundColor: '#986675' }}
    >
      <div className="container px-4 py-6 mx-auto md:py-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
          {/* Logo y tagline a la izquierda */}
          <div className="flex flex-col items-center w-full md:w-auto md:items-start">
            <img 
              src="/images/logofooter.png" 
              alt="Malva" 
              className="h-10 mb-2 sm:h-12 md:h-16"
            />
            <p className="text-xs text-center text-white sm:text-sm md:text-base md:text-left">
              Dónde las ideas toman color
            </p>
          </div>

          {/* Información de contacto a la derecha */}
          <div className="flex flex-col w-full gap-3 md:gap-4 md:w-auto">
            <a 
              href="https://instagram.com/malva.agencia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-white transition-opacity md:justify-start md:gap-3 hover:opacity-80 sm:text-sm md:text-base"
            >
              <img 
                src="/images/instagram.png" 
                alt="Instagram" 
                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="break-all">@malva.agencia</span>
            </a>
            
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs text-white transition-opacity md:justify-start md:gap-3 hover:opacity-80 sm:text-sm md:text-base"
            >
              <img 
                src="/images/facebook.png" 
                alt="Facebook" 
                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="text-center break-words md:text-left">MALVA - Agencia Publicitaria</span>
            </a>
            
            <a 
              href="mailto:malvapubli@gmail.com"
              className="flex items-center justify-center gap-2 text-xs text-white transition-opacity md:justify-start md:gap-3 hover:opacity-80 sm:text-sm md:text-base"
            >
              <img 
                src="/images/gmail.png" 
                alt="Email" 
                className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6"
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
