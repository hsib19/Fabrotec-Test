import Link from "next/link";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";

export default function ProductList() {
    return (
        <Container>
            <Row>
                {[...new Array(12).keys()].map((item, index) =>
                    <Col
                        key={index}
                        className="mt-4"
                    >
                        <Card
                        >
                            <img
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Iphone 16 - Ogirinal
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    $100.0
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Link href={"detail"}>
                                    <Button>
                                        View Detail
                                    </Button>
                                </Link>
                            </CardBody>
                        </Card></Col>
                )}
            </Row>
        </Container>
    );
}
