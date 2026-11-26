function Header() {
  return (
    <>
      <nav className="barra-navegacion">
        <a className="logo" href="#inicio">Proyecto los signos del zodiaco</a>

        <div className="enlaces-menu">
          <a href="#inicio">Inicio</a>
          <a href="#signos">Los 12 signos</a>
        </div>
      </nav>

      <header id="inicio" className="encabezado">
        <div className="encabezado-contenido">
          <h1>SIGNOS ZODIACALES</h1>
          <p className="subtitulo">
            Descubre los 12 signos del zodiaco y conoce un poco de cada uno.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
