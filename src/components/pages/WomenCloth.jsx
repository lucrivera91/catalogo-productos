import { useContext } from "react";
import { ProductosContext } from "../contexts/ProductosContext";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

export const WomenCloth = () => {
  const { productos } = useContext(ProductosContext);

  const womenCloth = productos.filter(
    (item) => item.category === "women's clothing"
  );

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#4e5d6b",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      <Container>
        <Row className="justify-content-around">
          {womenCloth.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4}>
              <Card
                bg="dark"
                text="light"
                className="p-1 mb-3"
                style={{ minHeight: "550px" }}
              >
                <Card.Header>{item.category}</Card.Header>
                <Container
                  fluid
                  className="d-flex justify-content-center mt-2"
                  style={{ backgroundColor: "white" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{ maxWidth: "200px", maxHeight: "250px" }}
                  />
                </Container>

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>

                  <Accordion>
                    <Accordion.Item eventKey={item.id}>
                      <Accordion.Header>Descripción</Accordion.Header>
                      <Accordion.Body>{item.description}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
                <Card.Footer
                  as="h4"
                  style={{ color: "#3de552" }}
                  className="d-flex justify-content-end"
                >
                  ${item.price}
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};
