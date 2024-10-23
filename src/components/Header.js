import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar id='d'>
        <Container>
          <Navbar.Brand href="#home">
           <Link to={'/'} style={{textDecoration:'none'}}>
               <div className='d-flex'>
                    <img
                      alt=""
                      src="https://i.postimg.cc/Hx6BjKzk/istockphoto-1266094665-612x612-removebg-preview.png"
                      width="60"
                      height="60"
                      className=""
                    />
                    <h2 className='mt-3 ms-3' id='d1'><span id='d3'>S</span>plash <span id='d3'>S</span>aver</h2>
               </div>
           </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header