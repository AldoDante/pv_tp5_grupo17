
import AlumnoCard from '../components/AlumnoCard';

export default function ListaAlumnos({ alumnos, deleteAlumno, startEditAlumno }) {
  if (alumnos.length === 0) {
    return <h2>No hay alumnos registrados.</h2>;
  }

  return (
    <div>
      <h2>Lista de Alumnos</h2>
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
