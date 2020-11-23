import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import logo from "../../../assets/images/logo.png";

function About() {
  return (
    <section className="about-view u-pt-gi">
      <Grid fluid>
        <Row>
          <Col xs={12} sm={12} md={8} lg={8} className="u-pt-gi">
            <h1>Richard Reid Coaching</h1>
            <h3>
              clarify your thinking, develop your actions and achieve your
              goals... one conversation at a time.
            </h3>
            <p>
              Nostrud irure dolor laborum laborum ut commodo consequat tempor et
              duis dolor ex incididunt. Tempor pariatur sit consequat consequat
              occaecat est nulla sunt id occaecat reprehenderit. Duis nostrud et
              culpa adipisicing dolor incididunt deserunt Lorem aliqua laborum
              reprehenderit ipsum.
            </p>
            <p>
              Nostrud irure dolor laborum laborum ut commodo consequat tempor et
              duis dolor ex incididunt. Tempor pariatur sit consequat consequat
              occaecat est nulla sunt id occaecat reprehenderit. Duis nostrud et
              culpa adipisicing dolor incididunt deserunt Lorem aliqua laborum
              reprehenderit ipsum.
            </p>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className="u-pt-gi flex-center">
            <img className="img-grow" src={logo} alt="Richard Reid Coaching" />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default About;
