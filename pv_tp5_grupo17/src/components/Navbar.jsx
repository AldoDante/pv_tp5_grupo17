import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/alumnos">Lista de Alumnos</Link></li>
        <li><Link to="/alumnos/nuevo">Nuevo Alumno</Link></li>
        <li><Link to="/acerca">Acerca de</Link></li>
      </ul>
    </nav>
  );
}
