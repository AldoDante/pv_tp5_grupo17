import { Link } from 'react-router-dom';

export default function AlumnoCard({ alumno, deleteAlumno, startEditAlumno }) {
  return (
    <div>
      <h3>{alumno.nombre} {alumno.apellido}</h3>
      <p>Curso: {alumno.curso}</p>
      <Link to={`/alumnos/${alumno.id}`}>Ver Detalles</Link>
      <Link to={`/alumnos/${alumno.id}/editar`} onClick={() => startEditAlumno(alumno)}>Editar</Link>
      <button onClick={() => deleteAlumno(alumno.id)}>Eliminar</button>
    </div>
  );
}

