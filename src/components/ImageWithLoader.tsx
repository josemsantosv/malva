import { useState } from 'react'

interface ImageWithLoaderProps {
  src: string
  alt: string
  className?: string
}

function ImageWithLoader({ src, alt, className = '' }: ImageWithLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="relative w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-lg animate-pulse">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#986675] rounded-full animate-spin"></div>
            <p className="text-sm text-gray-500">Cargando imagen...</p>
          </div>
        </div>
      )}
      {hasError ? (
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Error al cargar la imagen</p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  )
}

export default ImageWithLoader
