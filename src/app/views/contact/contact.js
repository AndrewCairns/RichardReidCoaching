import React, { useState } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

function Contact() {
  let [messageObject, setMessage] = useState({});
  const [showResults, setShowResults] = useState(true);

  function handleChange(e) {
    setMessage({
      ...messageObject,
      [e.target.name]: e.target.value,
    });
  }
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const HandleSubmit = (e) => {
    setShowResults(false);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...messageObject }),
    })
      .then(() => alert("Success! Your message has been sent"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <section className="contact-body u-pt-gi">
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h1>Get in touch</h1>
            <p>
              If you would like to find out more, join the podcast or are
              seeking support, please get in touch
            </p>

            {showResults ? (
              <form
                action="/success/"
                name="contact"
                method="post"
                onSubmit={HandleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="input-element">
                  <label htmlFor="name-input">Your Name:</label>
                  <input
                    name="name"
                    id="name-input"
                    placeholder="enter..."
                    onChange={handleChange}
                  />
                </div>

                <div className="input-element">
                  <label htmlFor="email-input">Your Email:</label>
                  <input
                    name="email"
                    type="email"
                    id="email-input"
                    placeholder="example@example.com"
                    onChange={handleChange}
                  />
                </div>

                <div className="input-element">
                  <label htmlFor="message-input">Your Message:</label>
                  <textarea
                    name="message"
                    id="message-input"
                    placeholder="Start your message here..."
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button className="btn" type="submit">
                  Send
                </button>
              </form>
            ) : (
              <div className="u-pv-gi">
                <h1>Success!</h1>
                <p>Your message has been sent. We will be in touch ASAP</p>
              </div>
            )}
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

export default Contact;
