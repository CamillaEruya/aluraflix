import './header.css'

function LayoutHeader({children}) {
  return (
    <>
      <header className="cabecalho">
        <div className="quadroLogo">
          <img className="logo" src="./imagens/LogoMain.png" />
        </div>
        <div className="quadroMenu">
          {/* <button className="btn">Home</button>
          <button className="btn">Criar video</button> */}
          <nav className="menu">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/CriarVideo">Novo video</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default LayoutHeader