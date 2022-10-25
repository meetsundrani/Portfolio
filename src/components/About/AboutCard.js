import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Meet Sundrani </span>
            from <span className="purple"> Vadodara, India.</span>
            <br />I'm currently working as a software engineer in Civica pvt ltd company. I have completed my Bachelor's of Engineering from Sardar Vallabhbhai Patel Institute of Technology, Vasad
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading about latest trends in tech and gadgets.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!.Because, Its easy to do something but it's a lot tougher to make a difference"{" "}
          </p>
          <footer className="blockquote-footer">Meet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
