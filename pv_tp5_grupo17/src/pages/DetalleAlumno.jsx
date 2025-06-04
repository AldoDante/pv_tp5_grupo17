import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function DetalleAlumno({ alumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const alumno = alumnos.find(a => a.id === id);

  if (!alumno) return <h2>Alumno no encontrado</h2>;

  return (
    <div>
      <h2 className="detalle-titulo">Detalles del Alumno</h2>
      <Card className="detalle-alumno-card mx-auto my-4" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Img variant="top" src="/images/perfil.jpg" />
        <Card.Body>
          <Card.Title className="detalle-alumno text-center"> Alumno: {alumno.nombre} {alumno.apellido}</Card.Title>
          <div className="detalle-alumno-texto">
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Curso:</strong> {alumno.curso}</p>
            <p><strong>Email:</strong> {alumno.email}</p>
            <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
            <p><strong>Teléfono:</strong> {alumno.telefono}</p>
          </div>

          <Button variant="primary" size="lg" className="d-block mx-auto mt-4" onClick={() => navigate('/alumnos')}>Volver a la lista</Button>
        </Card.Body>
      </Card>
    </div>
  );
}