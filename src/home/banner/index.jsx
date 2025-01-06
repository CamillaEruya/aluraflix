import './banner.css'

function HomeBanner() {


  return (
    <>
      <div className="banner">
        <div className="mascara">
          <div className="quadro">
            <div className="titulo">Frontend</div>
                <div className="subtitulo">SEO com React</div>
                  <div className="texto">
                    Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 
                  </div>
            </div>
                  <div className="quadro">
                    <img src="./imagens/card.png" />
                  </div>
                  
        </div>
      </div>
    </>
  )
}

export default HomeBanner