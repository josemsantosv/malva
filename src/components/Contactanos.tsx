function Contactanos() {
  const redesSociales = [
    {
      id: 1,
      name: 'Instagram',
      image: '/images/ig.png',
      url: 'https://instagram.com/malva.agencia',
    },
    {
      id: 2,
      name: 'Facebook',
      image: '/images/fb.png',
      url: 'https://facebook.com',
    },
    {
      id: 3,
      name: 'Gmail',
      image: '/images/mail.png',
      url: 'mailto:malvapubli@gmail.com',
    },
  ]

  return (
    <section className="w-full py-10 bg-white lg:py-20 lg:pb-40">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-5xl font-bold text-center md:text-6xl lg:py-20" style={{ color: '#986675' }}>
          CONTÁCTANOS
        </h2>
        <div className="flex items-center justify-center gap-8 lg:justify-around md:gap-12">
          {redesSociales.map((red) => (
            <a
              key={red.id}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={red.image}
                alt={red.name}
                className="w-16 h-16 lg:w-40 lg:h-40"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contactanos
