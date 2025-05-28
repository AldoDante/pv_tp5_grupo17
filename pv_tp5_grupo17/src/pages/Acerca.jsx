import { Container, Card } from "react-bootstrap";

export default function Acerca() {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card className="p-4 shadow-lg rounded-4 border-0" style={{ maxWidth: "600px", width: "100%" }}>
        <Card.Body>
          <h4 className="text-center mb-3">Acerca de la aplicación</h4>
          <p className="text-center text-muted">
            Creado por el grupo 17 - Programación Visual. <br />
            Esta app es un ejemplo de CRUD en React.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}
