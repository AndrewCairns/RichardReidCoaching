import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import characters from "../../../assets/images/RRC-Icon.png";

function Coaching() {
  return (
    <section className="home-body u-pt-gi">
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} className="u-pt-gi">
            <h1>Coaching</h1>
            <h3>Who, what, where, when, why, how</h3>
            <p>
              Aute est magna velit nisi excepteur ullamco consequat amet enim
              sint laboris. Elit laborum est quis esse do proident amet duis.
              Cupidatat reprehenderit exercitation fugiat magna quis est
              proident est pariatur non duis do occaecat. Amet minim ad
              exercitation consequat laboris enim proident.
            </p>

            <p>
              Aute est magna velit nisi excepteur ullamco consequat amet enim
              sint laboris. Elit laborum est quis esse do proident amet duis.
              Cupidatat reprehenderit exercitation fugiat magna quis est
              proident est pariatur non duis do occaecat. Amet minim ad
              exercitation consequat laboris enim proident.
            </p>

            <p>
              Aute est magna velit nisi excepteur ullamco consequat amet enim
              sint laboris. Elit laborum est quis esse do proident amet duis.
              Cupidatat reprehenderit exercitation fugiat magna quis est
              proident est pariatur non duis do occaecat. Amet minim ad
              exercitation consequat laboris enim proident.
            </p>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} sm={8} md={8} lg={6} className="u-pt-gi">
            <div className="flex-center u-p-gi">
              <img src={characters} alt="Richard Reid Coaching" />
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default Coaching;
