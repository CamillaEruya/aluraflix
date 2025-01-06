import HomeBanner from './banner'
import HomeCategorias from './categorias'

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCategorias id_categoria="1" titulo="Frontend" cor="rgb(95, 159, 242)"/>
      <HomeCategorias id_categoria="2" titulo="Backend" cor="rgb(0 198 110)"/>
      <HomeCategorias id_categoria="3" titulo="Inovação" cor="rgb(255 159 3)"/>
    </>
  )
}

export default Home