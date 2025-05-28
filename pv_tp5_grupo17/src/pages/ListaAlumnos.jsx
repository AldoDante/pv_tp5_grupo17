
export default function ListaAlumnos({ alumnos, deleteAlumno, startEditAlumno }) {
  if (alumnos.length === 0) {
    return <p>No hay alumnos registrados.</p>;
  }

  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {alumnos.map(alumno => (
        <div key={alumno.id} className="alumno-item">
          <h3>{alumno.nombre}</h3>
          <p>Edad: {alumno.edad}</p>
          <p>Curso: {alumno.curso}</p>
          <button onClick={() => startEditAlumno(alumno)}>Editar</button>
          <button onClick={() => deleteAlumno(alumno.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
