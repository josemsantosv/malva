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
      <nav className="container px-4 py-4 mx-auto">
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
          <ul className="items-center hidden space-x-6 lg:flex">
            <li>
              <a
                href="#home"
                className="text-sm font-medium text-white transition-colors hover:text-gray-200 md:text-base"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="text-sm font-medium text-white transition-colors hover:text-gray-200 md:text-base"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-sm font-medium text-white transition-colors hover:text-gray-200 md:text-base"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#ultimos-proyectos"
                className="text-sm font-medium text-white transition-colors hover:text-gray-200 md:text-base"
              >
                Últimos proyectos
              </a>
            </li>
            <li>
              <a
                href="#clientes"
                className="text-sm font-medium text-white transition-colors hover:text-gray-200 md:text-base"
              >
                Clientes
              </a>
            </li>
            <li>
              <a
                href="#contactanos"
                className="text-sm font-medium text-white transition-colors hover:text-gray-200 md:text-base"
              >
                Contáctanos
              </a>
            </li>
          </ul>

          {/* Botón Menú Mobile */}
          <button
            onClick={toggleMenu}
            className="text-white lg:hidden focus:outline-none"
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
          <div className="pb-4 mt-4 lg:hidden">
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="block py-2 text-base font-medium text-white transition-colors hover:text-gray-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  onClick={closeMenu}
                  className="block py-2 text-base font-medium text-white transition-colors hover:text-gray-200"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={closeMenu}
                  className="block py-2 text-base font-medium text-white transition-colors hover:text-gray-200"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#ultimos-proyectos"
                  onClick={closeMenu}
                  className="block py-2 text-base font-medium text-white transition-colors hover:text-gray-200"
                >
                  Últimos proyectos
                </a>
              </li>
              <li>
                <a
                  href="#clientes"
                  onClick={closeMenu}
                  className="block py-2 text-base font-medium text-white transition-colors hover:text-gray-200"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="#contactanos"
                  onClick={closeMenu}
                  className="block py-2 text-base font-medium text-white transition-colors hover:text-gray-200"
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
