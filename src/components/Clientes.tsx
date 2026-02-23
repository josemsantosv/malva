function Clientes() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl font-bold text-center md:text-6xl" style={{ color: '#986675' }}>CLIENTES</h2>
        <div className="flex justify-center">
          <img
            src="/images/clientes.png"
            alt="Clientes"
            className="w-full h-auto max-w-6xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Clientes
