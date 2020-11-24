import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

function Success() {
  return (
    <section className="contact-body u-pt-gi">
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1>Success!</h1>
            <p>Your message has been sent. We will be in touch ASAP</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <iframe
              title="map-to-location"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:EioxMiBCYWxseW1hY29ybWljayBSZCwgRHJvbW9yZSBCVDI1IDFRUSwgVUsiMBIuChQKEgnNv90wDB1hSBGoP7X8Co7otRAMKhQKEgmjqnFYAh1hSBHCosOjbyuCfg&key=AIzaSyCmc0M3Z_blpx0bU3bGGPcAiz3Iv04zNZg"
            ></iframe>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default Success;
