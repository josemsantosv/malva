import Banner from '../components/Banner'
import VideoSection from '../components/VideoSection'
import ImageCarousel from '../components/ImageCarousel'
import Servicios from '../components/Servicios'
import UltimosProyectos from '../components/UltimosProyectos'
import Clientes from '../components/Clientes'
import Contactanos from '../components/Contactanos'

function Home() {
  return (
    <main className="flex-1">
      {/* Banner Section */}
      <Banner />

      {/* Video Section */}
      <VideoSection />

      {/* Image Carousel Section */}
      <ImageCarousel />

      {/* Servicios Section */}
      <Servicios />

      {/* Últimos Proyectos Section */}
      <UltimosProyectos />

      {/* Clientes Section */}
      <Clientes />

      {/* Contáctanos Section */}
      <Contactanos />
    </main>
  )
}

export default Home
