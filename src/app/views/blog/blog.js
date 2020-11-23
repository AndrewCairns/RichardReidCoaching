import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import coachingImg from "../../../assets/images/coaching.jpg";
import teachingImg from "../../../assets/images/teaching.jpg";

function Blog() {
  return (
    <section className="blog-view">
      <h1 className="blog-header">Blog</h1>

      <div className="blog-post">
        <Grid fluid>
          <h2>Whats new this week?</h2>
          <h5>Posted 20/11/20 ◦ By Richard Reid</h5>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p>
                <em>Pariatur anim</em> cupidatat tempor laborum sunt. Laborum
                laborum anim consequat aute est veniam ipsum. Quis do in ipsum
                est anim culpa adipisicing aliquip ullamco sunt minim voluptate
                laboris laboris. Id non ad mollit in ea id amet Lorem laborum
                proident non. Enim ad culpa deserunt incididunt incididunt
                officia elit amet mollit.
              </p>
              <p>
                Pariatur anim cupidatat tempor laborum sunt. Laborum laborum
                anim consequat aute est veniam ipsum. Quis do in ipsum est anim
                culpa adipisicing{" "}
                <em>aliquip ullamco sunt minim voluptate laboris</em>
                laboris. Id non ad mollit in ea id amet Lorem laborum proident
                non. Enim ad culpa deserunt incididunt incididunt officia
                <em>elit amet mollit</em>.
              </p>
              <p>
                Pariatur anim cupidatat tempor laborum sunt. Laborum laborum
                anim consequat aute est veniam ipsum. Quis do in
                <em>
                  ipsum est anim culpa adipisicing aliquip ullamco sunt minim
                  voluptate
                </em>
                laboris laboris. Id non ad mollit in ea id amet Lorem laborum
                proident non. Enim ad culpa deserunt incididunt incididunt
                officia elit amet mollit.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>

      <div className="blog-post">
        <Grid fluid>
          <h2>Keeping up?</h2>
          <h5>Posted 20/11/20 ◦ By Richard Reid</h5>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <p>
                Pariatur anim cupidatat tempor laborum sunt. Laborum laborum
                anim consequat aute est veniam ipsum. Quis do in ipsum est anim
                culpa adipisicing{" "}
                <em>aliquip ullamco sunt minim voluptate laboris</em>
                laboris. Id non ad mollit in ea id amet Lorem laborum proident
                non. Enim ad culpa deserunt incididunt incididunt officia
                <em>elit amet mollit</em>.
              </p>
              <p>
                Pariatur anim cupidatat tempor laborum sunt. Laborum laborum
                anim consequat aute est veniam ipsum. Quis do in
                <em>
                  ipsum est anim culpa adipisicing aliquip ullamco sunt minim
                  voluptate
                </em>
                laboris laboris. Id non ad mollit in ea id amet Lorem laborum
                proident non. Enim ad culpa deserunt incididunt incididunt
                officia elit amet mollit.
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <img src={coachingImg} className="img-grow" alt="blog example" />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p>
                <em>Pariatur anim</em> cupidatat tempor laborum sunt. Laborum
                laborum anim consequat aute est veniam ipsum. Quis do in ipsum
                est anim culpa adipisicing aliquip ullamco sunt minim voluptate
                laboris laboris. Id non ad mollit in ea id amet Lorem laborum
                proident non. Enim ad culpa deserunt incididunt incididunt
                officia elit amet mollit.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>

      <div className="blog-post">
        <Grid fluid>
          <h2>Week 1!</h2>
          <h5>Posted 20/11/20 ◦ By Richard Reid</h5>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <p>
                <em>Pariatur anim</em> cupidatat tempor laborum sunt. Laborum
                laborum anim consequat aute est veniam ipsum. Quis do in ipsum
                est anim culpa adipisicing aliquip ullamco sunt minim voluptate
                laboris laboris. Id non ad mollit in ea id amet Lorem laborum
                proident non. Enim ad culpa deserunt incididunt incididunt
                officia elit amet mollit.
              </p>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={teachingImg} className="img-grow" alt="blog example" />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <p>
                Pariatur anim cupidatat tempor laborum sunt. Laborum laborum
                anim consequat aute est veniam ipsum. Quis do in ipsum est anim
                culpa adipisicing{" "}
                <em>aliquip ullamco sunt minim voluptate laboris</em>
                laboris. Id non ad mollit in ea id amet Lorem laborum proident
                non. Enim ad culpa deserunt incididunt incididunt officia
                <em>elit amet mollit</em>.
              </p>
              <p>
                Pariatur anim cupidatat tempor laborum sunt. Laborum laborum
                anim consequat aute est veniam ipsum. Quis do in
                <em>
                  ipsum est anim culpa adipisicing aliquip ullamco sunt minim
                  voluptate
                </em>
                laboris laboris. Id non ad mollit in ea id amet Lorem laborum
                proident non. Enim ad culpa deserunt incididunt incididunt
                officia elit amet mollit.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  );
}

export default Blog;
