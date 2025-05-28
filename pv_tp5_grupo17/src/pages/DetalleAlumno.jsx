import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function DetalleAlumno({ alumnos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const alumno = alumnos.find(a => a.id === id);

  if (!alumno) return <p>Alumno no encontrado</p>;

  return (
    <div>
      <h2>Detalles del Alumno</h2>
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Img variant="top" src="/images/perfil.jpg" />
        <Card.Body>
          <Card.Title> Alumno: {alumno.nombre} {alumno.apellido}</Card.Title>
          <div className="card-text">
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Curso:</strong> {alumno.curso}</p>
            <p><strong>Email:</strong> {alumno.email}</p>
            <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
            <p><strong>Teléfono:</strong> {alumno.telefono}</p>
          </div>

          <Button variant="primary" onClick={() => navigate('/alumnos')}>Volver a la lista</Button>
        </Card.Body>
      </Card>
    </div>
  );
}