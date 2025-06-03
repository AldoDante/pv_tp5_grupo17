import { Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Row>
        <Col>
          <Card className="shadow-lg p-3 rounded-4 border-0 card-bienvenida card-bienvenida-home">
            <Card.Body>
              <h2 className="bienvenida text-center text-dark mb-0 my-0">
                Bienvenido al sistema de gestión de alumnos
              </h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}