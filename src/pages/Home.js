import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Videos from "../components/Videos";
import Categories from "../components/Categories";
import Add from "../components/Add";
import './Home.css';

function Home() {

  const [loading,setLoading]=useState({})

  return (
    <div className="name">
      <Row className="py-5">
        <Col lg={6}  className="ms-2  ">
          <h1 className="mt-3 ms-3 d-flex" id="d1">
            <p
              id="d"
              className="ms-2 p-txt px-5 py-3"
              style={{
                fontSize: "20px",
                color: "white",
                backgroundColor: "brown",
              }}
            >
              Start Uploding Videos
            </p>
          </h1>
          <div className="p-3">
            <p className="w-100">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
              iste ad ratione eius necessitatibus in et quod natus. Omnis,
              reiciendis! In sequi vero enim esse animi necessitatibus sed
              praesentium impedit?
            </p>
            <div className="mt-4">
              <Link style={{ textDecoration: "none" }} to={'/watch-history'}>
                <p
                  className="text-white p-2 rounded border w-50 text-center"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.205" }}
                  color="white"
                >
                  View Watch History
                </p>
              </Link>
            </div>
          </div>
        </Col>
        <Col className="text-center d-flex flex-wrap flex-column align-content-center">
          <img
            className="mb-5"
            style={{ width: "60%", borderRadius: "25px" }}
            src="https://i.postimg.cc/KvZjF8sb/0a8671a21422eecab8189a2941bfb132.gif"
            alt=""
          />

          <Add update={setLoading}></Add>
        </Col>
      </Row>
      <Container>
        <hr />
      </Container>

      <Row>
        <Col lg={8}>
          <Videos updateData={loading}></Videos>
        </Col>
        <Col lg={4}>
          <Categories></Categories>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
