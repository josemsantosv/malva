import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Modal from './Modal'
import ImageWithLoader from './ImageWithLoader'

function Servicios() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const servicios = [
    {
      id: 1,
      image: '/images/servicios1.png',
      title: 'ESTRATEGIA',
      content: (
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="w-full md:w-1/2">
            <ImageWithLoader
              src="/images/estrategia.png"
              alt="Estrategia"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
              Diseñamos estrategias sólidas que construyen marcas con propósito. Analizamos el mercado y al público objetivo para definir el posicionamiento, el mensaje y el camino ideal de comunicación, integrando lo digital y lo estratégico para lograr resultados reales y sostenibles.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      image: '/images/servicios2.png',
      title: 'CREATIVIDAD',
      content: (
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="w-full md:w-1/2">
            <ImageWithLoader
              src="/images/creatividad.png"
              alt="Creatividad"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
              Transformamos ideas en conceptos creativos únicos que conectan emocionalmente con tu audiencia. Desarrollamos campañas innovadoras que destacan en el mercado y generan impacto duradero.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      image: '/images/servicios3.png',
      title: 'MEDIOS',
      content: (
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="w-full md:w-1/2">
            <ImageWithLoader
              src="/images/medios.png"
              alt="Medios"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
              Optimizamos la inversión publicitaria en los canales más efectivos. Gestionamos estrategias de medios digitales y tradicionales para maximizar el alcance y la conversión de tus campañas.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      image: '/images/servicios4.png',
      title: 'PRODUCCIÓN',
      content: (
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="w-full md:w-1/2">
            <ImageWithLoader
              src="/images/produccion.png"
              alt="Producción"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg">
              Producimos contenido audiovisual de alta calidad que cuenta historias impactantes. Desde videos corporativos hasta campañas publicitarias, llevamos tus ideas desde el concepto hasta la entrega final.
            </p>
          </div>
        </div>
      ),
    },
  ]

  const handleServiceClick = (id: number) => {
    setSelectedService(id)
  }

  const handleCloseModal = () => {
    setSelectedService(null)
  }

  const currentService = servicios.find((s) => s.id === selectedService)

  return (
    <>
      <section id="servicios" className="w-full py-8 bg-white sm:py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center lg:py-8 sm:text-5xl md:text-6xl sm:py-12 md:py-20 sm:mb-10 md:mb-12" style={{ color: '#986675' }}>
            SERVICIOS
          </h2>
          
          {/* Carrusel Mobile */}
          <div className="block md:hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              navigation={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={servicios.length > 1}
              className="servicios-carousel-mobile"
            >
              {servicios.map((servicio) => (
                <SwiperSlide key={servicio.id}>
                  <div
                    onClick={() => handleServiceClick(servicio.id)}
                    className="relative overflow-hidden transition-all bg-white rounded-lg cursor-pointer hover:shadow-xl group"
                  >
                    <div className="relative">
                      <div className="overflow-hidden border-4 border-white rounded-lg">
                        <img
                          src={servicio.image}
                          alt="Servicio"
                          className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Grid Desktop */}
          <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-4">
            {servicios.map((servicio) => (
              <div
                key={servicio.id}
                onClick={() => handleServiceClick(servicio.id)}
                className="relative overflow-hidden transition-all bg-white rounded-lg cursor-pointer hover:shadow-xl group"
              >
                <div className="relative">
                  <div className="overflow-hidden border-4 border-white rounded-lg">
                    <img
                      src={servicio.image}
                      alt="Servicio"
                      className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {currentService && (
        <Modal
          isOpen={selectedService !== null}
          onClose={handleCloseModal}
          title={currentService.title}
        >
          {currentService.content}
        </Modal>
      )}
    </>
  )
}

export default Servicios
