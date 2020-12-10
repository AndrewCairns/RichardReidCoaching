import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import characters from "../../../assets/images/RRC-Icon.png";

function Coaching() {
  return (
    <section className="home-body u-pt-gi">
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={12} md={10} lg={10} className="u-pt-gi">
            <div className="txt-align-left">
              <h1>Coaching</h1>
              <h3>Coaching is:</h3>
              <ul>
                <li>Is a structured conversation between you and your coach</li>
                <li>Is completely confidential</li>
                <li>Supports sustainable change</li>
                <li>
                  Provides a safe space for you to:
                  <ul>
                    <li>Do your best thinking</li>
                    <li>Increase your self-awareness</li>
                    <li>Be creative and take risks</li>
                    <li>Plan for success</li>
                  </ul>
                </li>
                <li>Offers you insightful and independent feedback</li>
                <li>
                  Prioritises your wellbeing and your personal/professional
                  development
                </li>
                <li>Provides support coupled with stretch and challenge</li>
                <li>Encourages action and positive change</li>
                <li>
                  <strong> Leads to better conversations</strong>
                </li>
              </ul>
              <h3>Coaching is not:</h3>
              <ul>
                <li>
                  Fixing, Telling or Advising – you know your context better
                  than anyone else
                </li>
                <li>
                  Therapy or counselling – the conversation is focused solely on
                  moving you forward not analysing the past
                </li>
              </ul>

              <h3 className="u-p-lg">
                If you want to find out more about coaching in have a look at my
                <Link to="/podcast"> podcast</Link> page where there are a
                number of episodes which focus on the whole area of coaching
                within education.
              </h3>
            </div>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} sm={8} md={6} lg={6} className="u-p-gi">
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
