import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="d">
      <Row>
        <Col lg={4}>
        <Link to={'/'} style={{textDecoration:'none'}}>
          <div className="d-flex p-4">
            
                <img
                  alt=""
                  src="https://i.postimg.cc/Hx6BjKzk/istockphoto-1266094665-612x612-removebg-preview.png"
                  width="60"
                  height="60"
                  className=""
                />
            
            <h2 className="mt-3 ms-3" id="d1">
              <span id="d3">S</span>plash <span id="d3">S</span>aver
            </h2>
          </div>
          </Link>
          <p className="px-4">
            "Capture the moment, share your story, Let your creativity shine,
            it's time to upload! Unleash your imagination, let the world see,
            Your unique vision awaits—start sharing now!"
          </p>
        </Col>

        <Col className="p-3 ms-3 mt-3" lg={4}>
          <h2 id="d3">Links</h2>
          <h5 className="mt-5">Landing</h5>
          <h5>Home</h5>
          <h5>History</h5>
        </Col>

        <Col>
          <div className="p-5">
            <h2 id="d3">Connect with us</h2>
            <label htmlFor="" className="d-flex w-75">
              <input
                placeholder="send emai"
                type="text"
                className="form-control"
              />
              <i class="fa-solid ms-3 fa-envelope fa-2x"></i>
            </label>
          </div>

          
          <div className="ps-5 px-4 w-75 d-flex justify-content-between">
          <i class="fa-brands fa-facebook fa-2x"></i>
          <i class="fa-brands fa-instagram fa-2x"></i>
          <i class="fa-brands fa-twitter fa-2x"></i>
          <i class="fa-brands fa-github fa-2x"></i>
          <i class="fa-brands fa-linkedin fa-2x"></i>
          




          </div>
        </Col>


      </Row>
    </div>
  );
}

export default Footer;
