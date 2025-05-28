
export default function ListaAlumnos({ alumnos, deleteAlumno, startEditAlumno }) {
  if (alumnos.length === 0) {
    return <p>No hay alumnos registrados.</p>;
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
