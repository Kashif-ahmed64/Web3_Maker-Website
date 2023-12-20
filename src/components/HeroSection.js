import React from "react";
import mockup from "../assets/img/Mockup.png";
import { Image } from "react-bootstrap";
import play from "../assets/img/Play 02.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div div style={{ backgroundColor: "black" }}>
      <div className="herosection">
        <div>
          <h1>
            Web3Makr Redefining <br />
            How You Create
          </h1>
          <p>
            Unlock the blockchain potential to create <br /> Web3 Applications
          </p>
          <Link to={"/"}>
            <Image src={play} style={{ marginTop: "1rem" }} />
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={mockup} width={"900px"} />
      </div>
    </div>
  );
}
