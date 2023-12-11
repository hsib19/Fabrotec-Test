"use client";

import { Col, Container, Row } from "reactstrap";

export default function ProductDetail() {
  return (
    <Container>
      <Row>
        <Col lg={4} md={4}>
          <img
            alt="Sample"
            src="https://picsum.photos/300/200"
            className="img-fluid"
          />
        </Col>
        <Col lg={8} md={8}>
          <h2>Title Product</h2>
          <h4>$100</h4>
          <p>Status : Availabe</p>
          <p>Description</p>
        </Col>
      </Row>
    </Container>
  );
}
