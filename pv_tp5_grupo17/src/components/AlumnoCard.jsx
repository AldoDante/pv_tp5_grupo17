import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function AlumnoCard({ alumno, deleteAlumno, startEditAlumno }) {
  return (

    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Curso</th>
          <th>Email</th>
          <th>Domicilio</th>
          <th>Telefono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{alumno.id}</td>
          <td>{alumno.nombre}</td>
          <td>{alumno.apellido}</td>
          <td>{alumno.curso}</td>
          <td>@{alumno.email}</td>
          <td>{alumno.domicilio}</td>
          <td>{alumno.telefono}</td>
          <td>
            <div>
              <Button variant="success" className="me-2" >
                <Link 
                  to={`/alumnos/${alumno.id}`} 
                  style={{ textDecoration: 'none', color: 'white' }}>
                <i className="bi bi-eye"></i>
                </Link>
              </Button>
              <Button variant="warning" className="me-2" >
                <Link 
                  to={`/alumnos/${alumno.id}/editar`} 
                  onClick={() => startEditAlumno(alumno)} 
                  style={{ textDecoration: 'none', color: 'white' }}>
                <i className="bi bi-pencil"></i>
                </Link>
              </Button>
              <Button 
                onClick={() => deleteAlumno(alumno.id)} 
                variant="danger"
                className="me-2">
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

