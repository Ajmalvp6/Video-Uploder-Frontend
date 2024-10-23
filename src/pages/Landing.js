import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Row className="py-5">

      <Col lg={6} className="p-5 ">
          <img
            style={{ width: "60%", borderRadius: "25px" }}
            src="https://i.postimg.cc/KvZjF8sb/0a8671a21422eecab8189a2941bfb132.gif"
            alt=""
          />
        </Col>

        <Col className="ms-3">
          <h1 className="mt-3 ms-3" id="d1">
            <span id="d3">S</span>plash <span id="d3">S</span>aver
            <p className="mt-3 p-txt" style={{ fontSize: '20px' }}>The complete media solution</p>
          </h1>
          <div className="p-3">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              iste ad ratione eius necessitatibus in et quod natus. Omnis,
              reiciendis! In sequi vero enim esse animi necessitatibus sed
              praesentium impedit?
            </p>
            <div className="mt-4">
              <Link to={'/home'}>
                <button
                  style={{ backgroundColor: "brown", color: "white" }}
                  className="p-2 rounded px-5"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </Col>
       
      </Row>

      <Container>
        <hr />
      </Container>

      <Container className="p-3 mb-5">
        <h1 className="text-center mb-5">Features</h1>
        <Row>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: "100%", backgroundColor: 'rgba(0, 0, 0, 0.205)' }} className="text-light p-4">
              <Card.Img variant="top" src="https://i.postimg.cc/pXGhcsGy/expert-checking-business-leader-order-74855-10624.avif" />
              <h3 className="text-center mt-4">Managing Videos</h3>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "brown", color: "white" }}
                  className="p-2 rounded px-5 mt-5 pb-3"
                >
                  Explore
                </button>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: "100%", backgroundColor: 'rgba(0, 0, 0, 0.205)' }} className="text-light p-4">
              <Card.Img variant="top" src="https://i.postimg.cc/Yqhq0MRq/online-educational-video-701961-516.avif" />
              <h3 className="text-center mt-4">Categorise Videos</h3>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "brown", color: "white" }}
                  className="p-2 rounded px-5 mt-5 pb-3"
                >
                  Explore
                </button>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: "100%", backgroundColor: 'rgba(0, 0, 0, 0.205)' }} className="text-light p-4">
              <Card.Img variant="top" src="https://i.postimg.cc/9fGf2bpd/digital-education-illustration-concept-701961-1850.avif" />
              <h3 className="text-center mt-4">Watch History</h3>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-center">
                <button
                  style={{ backgroundColor: "brown", color: "white" }}
                  className="p-2 rounded px-5 mt-5 pb-3"
                >
                  Explore
                </button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
