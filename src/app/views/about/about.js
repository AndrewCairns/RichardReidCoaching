import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import headshot from "../../../assets/images/headshot.JPG";

function About() {
  return (
    <section className="about-view">
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={12} md={12} lg={12} className="u-pt-gi">
            <h1 className="txt-align-left">About Me:</h1>
            <img className="img-grow" src={headshot} alt="Richard Reid" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} className="u-pt-gi">
            <div className="txt-align-left">
              <h3>This is a snapshot of my first 21 years in education:</h3>
              <p>
                In 2000 I qualified as a primary school teacher and taught KS2
                classes for my first five years. In 2005 I moved to a vice
                principal post and a class of 35 P7s! Then in 2007 I was
                seconded to the primary management team with the North Eastern
                Education and Library Board where I enjoyed two wonderful years
                delivering teacher training as part of the revised curriculum
                roll out. During my time with the board I specialised in
                thinking skills, training teachers in the use of innovative
                teaching approaches such as De Bono’s Thinking Hats and
                Philosophy for Children.
              </p>
              <p>
                In 2009 I started my first principal post where I got my first
                real experience of ‘spinning multiple plates’ while ‘wearing
                multiple hats’. After nearly 12 years of headship there now
                seems to be even more plates and I’ve completely lost count of
                the hats!
              </p>
              <p>
                In 2014 I had the opportunity of taking on the role of an
                executive principal when I was asked to manage a second school
                alongside my own for a year. Two boards of governors, two teams
                of teachers, two sports days, two prize days, two budgets ...
                you get the picture, it certainly was a challenge.
              </p>
              <p>
                In 2016 I moved to my third and current Principal post and in
                2019, with a temporary variation in contract, I used some time
                out of school to qualify as an executive coach. I had always
                used a ‘coaching’ style of leadership and it was great to be
                able to complete an ILM5 in coaching and mentoring as well as
                the ‘Leader as Coach’ course with Leon Edu. During the process I
                received such encouraging feedback from fellow principals that I
                decided to set up Richard Reid Coaching, a small part-time
                practice through which I deliver 1-1 coaching to school
                principals and teachers.
              </p>
              <p>
                My latest venture has been my Podcast – Head Room ‘Curious
                conversations for leaders in education’. I have been truly
                blessed by some fascinating conversations with coaches, coach
                trainers, and local principals. See the podcast page for more
                details.
              </p>
              <p>
                I am also an Associate Coach with Inspire Workplaces and deliver
                coaching to principals through Inspire’s ‘Principal Coaching
                Program’.
              </p>
              <h3>
                And the goal for my next 21 years in education: ‘Let’s have even
                better conversations’.
              </h3>
              <br />
              <br />
              <br />
              <h1 className="u-pt-gi">Testimonials</h1>
              <p>
                Richard is an excellent coach who you really feel is listening
                and appreciating every word you say. He also helped me to see
                what I was achieving and to value myself more - something that I
                was not doing. The sessions provided me with the ability to
                support my personal mindset and get it back on track. Thank you
                Richard for the valuable work you do - it is needed and it is
                appreciated. <em> - Jill Hunter, Nursery School Principal</em>
              </p>
              <p>
                A very beneficial process, in its entirety, but the ‘listening’
                aspect of Richard’s role was particularly appreciated.{" "}
                <em> - Hilary Johnston, Primary School Principal</em>
              </p>
              <p>
                I found working with Richard to be a fantastic way to make my
                goals clear in my mind, but most importantly I started making
                active choices towards achieving them. I would recommend working
                with Richard to anyone! <em> - Neal McDowell, KS2 Teacher</em>
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Grid>
    </section>
  );
}

export default About;
