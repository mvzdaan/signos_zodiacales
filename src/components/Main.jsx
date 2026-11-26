import Aries from './Aries';
import Tauro from './Tauro';
import Geminis from './Geminis';
import Cancer from './Cancer';
import Leo from './Leo';
import Virgo from './Virgo';
import Libra from './Libra';
import Escorpio from './Escorpio';
import Sagitario from './Sagitario';
import Capricornio from './Capricornio';
import Acuario from './Acuario';
import Piscis from './Piscis';

function Main() {
  return (
    <main id="signos" className="contenido">
      <div className="introduccion">
        <p className="etiqueta-seccion">EXPLORA LOS 12 SIGNOS ZODIACALES</p>
        <h2>Busca tu signo del zodiaco para conocer más detalles</h2>
      </div>

      <section className="rejilla-signos" aria-label="Lista de los doce signos del zodiaco">
        <Aries />
        <Tauro />
        <Geminis />
        <Cancer />
        <Leo />
        <Virgo />
        <Libra />
        <Escorpio />
        <Sagitario />
        <Capricornio />
        <Acuario />
        <Piscis />
      </section>

    </main>
  );
}

export default Main;
