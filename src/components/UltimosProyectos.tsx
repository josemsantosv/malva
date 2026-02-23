function UltimosProyectos() {
  const proyectos = [
    {
      id: 1,
      image: '/images/uproyectos1.png',
      title: 'Proyecto 1',
      description: '“La bajona” - Unidad comercial de comida rapida.',
    },
    {
      id: 2,
      image: '/images/uproyectos2.png',
      title: 'Proyecto 2',
      description: '“Gardelle” - Local de repostería.',
    },
  ]

  return (
    <section id="ultimos-proyectos" className="w-full py-16 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        <h2 className="py-5 mb-12 text-5xl font-bold text-center lg:py-20 md:text-6xl" style={{ color: '#986675' }}>
          ÚLTIMOS PROYECTOS 
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="flex flex-col">
              <div className="relative flex-shrink-0 overflow-hidden transition-shadow bg-white rounded-lg hover:shadow-xl group">
                <div className="overflow-hidden border-4 border-white rounded-lg">
                  <img
                    src={proyecto.image}
                    alt={proyecto.title}
                    className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="p-6 mt-auto">
                <p className="text-3xl font-semibold text-center text-black">{proyecto.description}</p>
              </div>
            </div>
          ))}

                
        </div>
   
      </div>
    </section>
  )
}

export default UltimosProyectos
