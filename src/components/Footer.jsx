import { useState, useEffect, useRef } from 'react';

function Footer() {
  const [visitas, setVisitas] = useState(0);
  const yaConto = useRef(false);

  useEffect(() => {
    // Evita contar dos veces la misma carga en modo desarrollo.
    if (yaConto.current) return;
    yaConto.current = true;

    // Recupera el contador guardado en este navegador.
    const visitasGuardadas = Number(localStorage.getItem('visitas')) || 0;
    const nuevasVisitas = visitasGuardadas + 1;

    // Guarda el nuevo total y lo muestra en pantalla.
    localStorage.setItem('visitas', nuevasVisitas);
    setVisitas(nuevasVisitas);
  }, []);

  return (
    <footer className="pie-pagina">
      <p>Proyecto los signos del zodiaco</p>
      <p>Visitas desde este navegador: {visitas}</p>
    </footer>
  );
}

export default Footer;
