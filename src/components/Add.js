import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { addVideoApi } from "../Services/allApis";

function Add({update}) {
  // create state to store inputs data
  const [videoInputs,setVideoInputs]=useState({
    title:'',
    coverImage:'',
    videoUrl:''
  })


  
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const setDatas=(e)=>{
    let value =e.target.value
    let name =e.target.name

    setVideoInputs({...videoInputs,[name]:value})

    // destructured

   // let {value,name}=e.target
    
    
  }

  const setVideoUrl=(e)=>{
    let value =e.target.value
    let name =e.target.name

    //"https://www.youtube.com/embed/p4eVnYM4O-I"


    var newValue=`https://www.youtube.com/embed/${value.slice(-11,)}`
    console.log(newValue);
    setVideoInputs({...videoInputs,[name]:newValue})

    
  }

  const addVieo=async()=>{
    const {title,coverImage,videoUrl}=videoInputs
    if(title=="" || coverImage=="" || videoUrl==""){
      alert('please fill all datas')
    }
    else{
      
      const out = await addVideoApi(videoInputs)
      console.log(out);
      if(out.status>=200 && out.status<300){
        alert('video added successfully')
        handleClose()
        update(videoInputs)
      }
      else{
        alert('video adding failed')
      }
      
    }
  }

  console.log(videoInputs);



  


  return (
    <div style={{ cursor: "pointer" }}>
      <div variant="primary" onClick={handleShow}>
        <img
          style={{ width: "100px" }}
          src="https://i.postimg.cc/QdmtY9Qw/video-play-watch-player-white-icon-701751694974377g2f7y3zhbu-removebg-preview.png"
          alt=""
        />

        <h5
          className="text-white p-2 rounded border w-50 text-center w-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.205" }}
          color="white"
        >
          Add videos
        </h5>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#020512" }}>
          <Modal.Title>
            <h1 id="d3">Add New Video</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#020512" }}>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Video Title"
              className="mb-3 text-dark"
            >
              <Form.Control name="title" onChange={(e)=>setDatas(e)} type="text" placeholder="title" />
            </FloatingLabel>



            <FloatingLabel
              controlId="floatingInput"
              label="Cover Image URL"
              className="mb-3 text-dark"
            >
              <Form.Control name="coverImage" onChange={(e)=>setDatas(e)} type="text" placeholder="title" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Utube Video URL"
              className="mb-3 text-dark"
            >
              <Form.Control name="videoUrl" onChange={(e)=>setVideoUrl(e)} type="text" placeholder="title" />
            </FloatingLabel>


           

            
          </>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#020512" }}>
          <Button
            style={{ backgroundColor: "brown", color: "white", border: "none" }}
            className="p-2 rounded px-5"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            style={{ backgroundColor: "brown", color: "white", border: "none" }}
            className="p-2 rounded px-5"
            onClick={addVieo}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
