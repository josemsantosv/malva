import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

function ImageCarousel() {
  const cards = [
    {
      id: 1,
      image: '/images/nosotros1.png',
      position: 'DIC. PRODUCCIÓN',
      name: 'Valeria Quispe',
      quote: '"Transformo ideas en historias visuales que inspiran."',
    },
    {
      id: 2,
      image: '/images/nosotros2.png',
      position: 'DIC. ESTRATEGIA',
      name: 'Luis Muñiz',
      quote: '"Transformo ideas en estrategia, y la estrategia en crecimiento."',
    },
    {
      id: 3,
      image: '/images/nosotros3.png',
      position: 'DIC. CUENTAS',
      name: 'Michel Mendoza',
      quote: '"Cuando priorizo la comunicación, impulso mejores resultados."',
    },
    {
      id: 4,
      image: '/images/nosotros4.png',
      position: 'SOCIAL MEDIA MANAGER',
      name: 'Alexandra Evarista',
      quote: '"Hago que las ideas correctas lleguen a las personas correctas, en el medio ideal."',
    },
    {
      id: 5,
      image: '/images/nosotros5.png',
      position: 'DIC. CREATIVA',
      name: 'Allisson León',
      quote: '"Transformo ideas en estética, y la estética en identidad."',
    },
  ]

  return (
    <section className="w-full py-8 bg-white sm:py-12 md:py-16">
      <h2 className="py-10 text-5xl font-bold text-center md:text-6xl" style={{ color: '#986675' }}>NOSOTROS</h2>
      <div className="container px-4 mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={cards.length > 1}
          speed={1000}
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className="image-carousel"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Imagen */}
                  <div className="w-full md:w-2/5">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="object-contain w-full h-auto md:object-cover md:h-full"
                      loading="lazy"
                    />
                  </div>
                  {/* Contenido */}
                  <div className="flex flex-col justify-center w-full p-4 md:w-3/5 sm:p-6">
                    <h3 className="mb-1 text-base font-bold sm:text-lg md:text-xl sm:mb-2" style={{ color: '#986675' }}>
                      {card.position}
                    </h3>
                    <p className="mb-2 text-sm text-gray-600 sm:mb-4 sm:text-base md:text-lg">{card.name}</p>
                    <p className="text-xs italic leading-relaxed text-gray-800 sm:text-sm md:text-base">
                      {card.quote}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ImageCarousel
