function VideoSection() {
  return (
    <section className="w-full py-16 bg-gray-100">
  <div className="py-10">
  <h2 className="text-6xl font-extrabold text-center text-black">¡LE PONEMOS COLOR A LAS IDEAS!</h2>
  </div>
      <div className="max-w-5xl px-4 mx-auto mt-10">
        <div className="relative w-full overflow-hidden bg-gray-300 rounded-lg aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/xqHy5PQOqq0?si=8BC7fidWad9OcmQC"
            title="Video de Malva"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
