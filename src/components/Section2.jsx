import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import start from "../assets/img/section2.png";

function Section2() {
  return (
    <div className="Section2">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <h2>Create your own Web3 Masterpiece </h2>
            <p>
              Most entrepreneurs want to create their own web3 sites,
              unfortunately, they dont know much about creating one. Web3Makr
              makes it easier for newbies to create a blockchain-based
              collectibles solution without the hassle of leaving their favorite
              creation tools and by simple drag and drop functionality
            </p>
            <Button className="start-btn">START BUILDING</Button>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Image src={start} width={"480px"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section2;
