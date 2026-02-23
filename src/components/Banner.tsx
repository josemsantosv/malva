import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

function Banner() {
  const banners = [
    {
      id: 1,
      image: '/images/banner1.png',
      alt: 'Banner 1',
    },
    {
      id: 2,
      image: '/images/banner20.png',
      alt: 'Banner 2',
    },
    {
      id: 3,
      image: '/images/banner30.png',
      alt: 'Banner 3',
    },
    {
      id: 4,
      image: '/images/banner40.png',
      alt: 'Banner 4',
    },
  ]

  return (
    <section id="home" className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
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
        loop={banners.length > 1}
        speed={1000}
        className="banner-swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={banner.image}
                alt={banner.alt}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Banner
