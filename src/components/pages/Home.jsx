import { useContext } from "react";
import { ProductosContext } from "../contexts/ProductosContext";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

export const Home = () => {
  const { productos } = useContext(ProductosContext);

  return (
    <Container fluid style={{backgroundColor: "#4e5d6b", minHeight: "100vh", paddingTop: "80px"}}>
      <Container>
        <Row>
          {productos.map((item) => (
            <Col key={item.id} sm={12} md={4} lg={3}>
              <Card bg="dark" text="light">
                <Card.Img
                  className="align-self-center"
                  variant="top"
                  src={item.image}
                  style={{ maxWidth: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <Accordion data-bs-theme="dark">
                      <Accordion.Item eventKey={item.id}>
                        <Accordion.Header>Descripción</Accordion.Header>
                        <Accordion.Body>{item.description}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {item.category}
                  {item.price}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
