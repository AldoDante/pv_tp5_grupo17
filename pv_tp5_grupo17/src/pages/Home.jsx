import { Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Row>
        <Col>
          <Card className="shadow-lg p-4 rounded-4 border-0" bg="light">
            <Card.Body>
              <h2 className="text-center text-dark mb-0">
                Bienvenido al sistema de gestión de alumnos
              </h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}