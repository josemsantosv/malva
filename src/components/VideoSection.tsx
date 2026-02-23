function VideoSection() {
  return (
    <section className="w-full py-16 bg-gray-100">
  <div className="py-10">
  <h2 className="text-6xl font-extrabold text-black text-center">¡LE PONEMOS COLOR A LAS IDEAS!</h2>
  </div>
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <div className="relative w-full aspect-video bg-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-500">VIDEO</p>
            <p className="text-gray-400 mt-2"></p>
          </div>
          {/* Aquí se puede agregar el video más adelante */}
          {/* 
          <video 
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          */}
        </div>
      </div>
    </section>
  )
}

export default VideoSection
