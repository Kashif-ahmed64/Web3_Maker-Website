import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import fox from "../assets/img/fox.png";
import man from "../assets/img/man.png";
import moralis from "../assets/img/moralis.png";
import solidity from "../assets/img/solidity.png";
import ether from "../assets/img/ether.png";
import hardhat from "../assets/img/hardhat.png";

function Future() {
  return (
    <div className="future">
      <div>
        <h2>The Future of Web3 NoCode</h2>
        <h4>
          Web3Makr allows you to incorporate top ranked blockchain platforms
          into your work through the drag and drop feature.
        </h4>
        <div className="mt-5">
          <Container>
            <Row>
              <Col sm={12} md={12} lg={4}>
                <h3 style={{ marginBottom: "3rem" }}>Multichain</h3>
                <h3 style={{ marginBottom: "3rem" }}>Dashboard</h3>
                <h3>Tool</h3>
              </Col>
              <Col sm={12} md={12} lg={8}>
                <div className="images">
                  <Image
                    src={fox}
                    width={"90px"}
                    roundedCircle
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      margin: "1rem",
                    }}
                  />
                  <Image
                    src={man}
                    width={"90px"}
                    roundedCircle
                    style={{ backgroundColor: "white", margin: "1rem" }}
                  />
                  <Image
                    src={moralis}
                    width={"90px"}
                    roundedCircle
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      margin: "1rem",
                    }}
                  />
                </div>
                <div className="images">
                  <Image
                    src={solidity}
                    width={"90px"}
                    roundedCircle
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      margin: "1rem",
                    }}
                  />{" "}
                  <Image
                    src={ether}
                    width={"90px"}
                    roundedCircle
                    style={{
                      backgroundColor: "white",
                      padding: "3px",
                      margin: "1rem",
                    }}
                  />
                  <Image
                    src={hardhat}
                    width={"90px"}
                    roundedCircle
                    style={{ backgroundColor: "white", padding: "3px" }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Future;
