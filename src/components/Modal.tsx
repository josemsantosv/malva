import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl m-2 sm:m-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sm:px-6 sm:py-4">
          <h2 className="pr-2 text-xl font-bold sm:text-2xl md:text-3xl" style={{ color: '#986675' }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-2xl font-bold text-gray-500 transition-colors hover:text-gray-700 sm:text-3xl"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
