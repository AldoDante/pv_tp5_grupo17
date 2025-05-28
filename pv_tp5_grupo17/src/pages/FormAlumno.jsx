import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from "react-bootstrap";

export default function FormAlumno( { addAlumno, editingAlumno, updateAlumno, alumnos }) {
  const [form, setForm] = useState({
    id:'', nombre: '', apellido: '', curso: '', email: '', domicilio: '', telefono: ''
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (editingAlumno) {
      setForm(editingAlumno);
    }
  }, [editingAlumno]);

  const handleChange = e => {
    const { name, value } = e.target;
    let newValue = value;

    // Eliminar ceros al inicio del ID
    if (name === "id") {
      newValue = value.replace(/^0+/, '');
    }
    setForm(prev => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errors = [];
    const { id, nombre, apellido, curso, email, domicilio, telefono } = form;
    if (!id || !nombre || !apellido || !curso || !email || !domicilio || !telefono) {
      errors.push('Todos los campos son obligatorios.');
    }
    if (id && isNaN(id)) {
      errors.push('El ID debe ser un número.');
    }
    if (telefono && isNaN(telefono)) {
      errors.push('El teléfono debe ser un número.');
    }
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
    // Verificar si el ID ya existe
    if (alumnos.some(alumno => alumno.id === id && alumno.id !== editingAlumno?.id)) {
      alert('El ID ya está en uso. Por favor, elige otro.');
      return;
    }
    const idNumber = Number(id);
    if (!id || isNaN(idNumber) || !Number.isInteger(idNumber) || idNumber <= 0) {
      errors.push('El ID debe ser un número entero positivo sin ceros iniciales.');
    }
    // Verificar si el email ya existe
    if (alumnos.some(alumno => alumno.email === email && alumno.email !== editingAlumno?.email)) {
      alert('El email ya está en uso. Por favor, elige otro.');
      return;
    }
    // Verificar si el teléfono ya existe
    if (alumnos.some(alumno => alumno.telefono === telefono && alumno.telefono !== editingAlumno?.telefono)) {
      alert('El teléfono ya está en uso. Por favor, elige otro.');
      return;
    }
    if (id && id.length > 10) {
      alert('El ID no puede tener más de 10 caracteres.');
      return;
    }
    if (telefono && telefono.length > 15) {
      alert('El teléfono no puede tener más de 15 caracteres.');
      return;
    }
    if (email && email.length > 50) {
      alert('El email no puede tener más de 50 caracteres.');
      return;
    }
    if (domicilio && domicilio.length > 100) {
      alert('El domicilio no puede tener más de 100 caracteres.');
      return;
    }
    if (nombre && nombre.length > 30) {
      alert('El nombre no puede tener más de 30 caracteres.');
      return;
    }
    if (apellido && apellido.length > 30) {
      alert('El apellido no puede tener más de 30 caracteres.');
      return;
    }
    if (curso && curso.length > 20) {
      alert('El curso no puede tener más de 20 caracteres.');
      return;
    }
    if (domicilio && domicilio.length > 100) {
      alert('El domicilio no puede tener más de 100 caracteres.');
      return;
    }
    
    const alumno = {
      ...form
    };
    if (editingAlumno) {
      updateAlumno(alumno);
    } else {
      addAlumno(alumno);
    }

    setForm({ id: '', nombre: '', apellido: '', curso: '', email: '', domicilio: '', telefono: '' });
  
    navigate('/alumnos');
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg rounded-4 border-0" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-4">
          {editingAlumno ? "Editar Alumno" : "Nuevo Alumno"}
        </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              placeholder="ID"
              value={form.id}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCurso">
            <Form.Label>Curso</Form.Label>
            <Form.Control
              type="text"
              name="curso"
              placeholder="Curso"
              value={form.curso}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDomicilio">
            <Form.Label>Domicilio</Form.Label>
            <Form.Control
              type="text"
              name="domicilio"
              placeholder="Domicilio"
              value={form.domicilio}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit" size="lg">
              {editingAlumno ? "Actualizar" : "Agregar"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}