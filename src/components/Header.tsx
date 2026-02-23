import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header 
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: '#986675' }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Malva" 
              className="h-8 sm:h-10 md:h-12"
            />
          </div>

          {/* Menú Desktop */}
          <ul className="hidden lg:flex items-center space-x-6">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                Últimos proyectos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-200 transition-colors font-medium text-sm md:text-base"
              >
                Contáctanos
              </a>
            </li>
          </ul>

          {/* Botón Menú Mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                >
                  Últimos proyectos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={closeMenu}
                  className="block text-white hover:text-gray-200 transition-colors font-medium text-base py-2"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
