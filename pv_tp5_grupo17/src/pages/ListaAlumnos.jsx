
import AlumnoCard from '../components/AlumnoCard';

export default function ListaAlumnos({ alumnos, deleteAlumno, startEditAlumno }) {
  if (alumnos.length === 0) {
    return <h2 className="lista-vacia">No hay alumnos registrados.</h2>;
  }

  return (
    <div className="lista-alumnos-container">
      <h2 className="titulo-lista-alumnos mb-4">Lista de Alumnos</h2>
      {alumnos.map(alumno => (
        <AlumnoCard
          key={alumno.id}
          alumno={alumno}
          deleteAlumno={deleteAlumno}
          startEditAlumno={startEditAlumno}
        />
      ))}
    </div>
  );
}
