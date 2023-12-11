"use client";

import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSliderStyle = { width: "100%", height: "100%" };

export default function ProductDetail() {

  const router = useRouter()
  const pathname = usePathname();

  const [loadingProduct, setLoadingProduct] = useState(true);
  const [dataProduct, setDataProduct] = useState("");

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = () => {
    const productID = pathname.split("/")[2];

    axios.get(`https://dummyjson.com/products/${productID}`)
    .then(response => {
      const res = response.data;
      setDataProduct(res);
      setLoadingProduct(false)
    }).catch(error => {
      console.log(error);
    })

  }

  if (loadingProduct) {
    return (
      <Container>
        <h2 className="my-3">Loading...</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="my-5">
        <Col lg={6} md={6} style={{ position: 'relative',minHeight: 600 }}>
          {/* <UncontrolledCarousel items={dataProduct.images} /> */}
          {/* <img alt="Sample" src={dataProduct.thumbnail} className="img-fluid" /> */}
          <SimpleImageSlider
            width={ImageSliderStyle.width}
            height={ImageSliderStyle.height}
            images={dataProduct.images}
            showBullets={false}
            showNavs={true}
            autoPlay
            style={{ position: "absolute", top: "0", right: "0", zIndex: 2 }}
          />
        </Col>
        <Col lg={6} md={6}>
          <h2 className="text-capitalize">{dataProduct.title}</h2>
          <h4>${dataProduct.price}</h4>
          <p>Status : {dataProduct.stock > 0 ? "Available" : "Out of Stock"}</p>
          <p>
            <strong>Description :</strong>
          </p>
          <p>{dataProduct.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
