import axios from "axios";
import Link from "next/link";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";

export default function ProductList({ loadingProduct, productList }) {

   
    if(loadingProduct){
        return (
          <Container>
            <h2 className="my-3">Loading...</h2>
          </Container>
        );
    }

    return (
      <Container>
        <Row>
          {productList.map((item, index) => (
            <Col key={index} className="mt-4" lg={3} md={3}>
              <Card>
                <img
                  alt="Sample"
                  src={item.thumbnail}
                  className="img-fluid"
                  style={{ height: 200 }}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    {item.title.length > 20
                      ? item.title.substring(0, 20) + "..."
                      : item.title}
                  </CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    ${item.price}
                  </CardSubtitle>
                  <CardText>
                    {item.description.length > 60
                      ? item.description.substring(0, 60) + "..."
                      : item.description}
                  </CardText>
                  <Link href={`detail/${item.id}`}>
                    <Button>View Detail</Button>
                  </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
}
