import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Trash2 } from "react-feather";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { addHistories, deleteVideoApi } from "../Services/allApis";
import { format } from "date-fns";


function VideoCard({data,deletedata}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async() => {
    setShow(true);

    
      let title =data.title

      let videoUrl=data.videoUrl

      let  datetime = format(new Date(),"yyyy-MM-dd hh:mm:ss a")

      var bodyDate = {
        title,
        videoUrl,
        datetime,
      }

      
        const result = await addHistories(bodyDate)
      
        

  }

  const deleteVideo=async(id)=>{
    const result = await deleteVideoApi(id)
    alert("video deleted")
    deletedata(true)
  }

  const dragingStart = (e, id) => {
    console.log("dragging started");
    console.log(id);
  
    e.dataTransfer.setData("cardId", id); 
    
  

  }
  


  return (
    <div>
      <Card draggable onDragStart={(e)=>dragingStart(e,data.id)}
        style={{ width: "100%", backgroundColor: "rgba(0, 0, 0, 0.205)", height:"420px", cursor:"pointer" }}
        className="text-light p-4"
      >
        <Card.Img
          onClick={handleShow}
          variant="top"
          className="w-100"
          style={{ height: "250px" }}
          src={data.coverImage}
        />
        <Card.Body className="my-3">
          <div className="d-flex justify-content-between">
            <Card.Title>
              <h4 className="text-center">{data.title.length>30 ? data.title.slice(0,30)+`...` : data.title}</h4>
            </Card.Title>
            <Trash2 color="red" style={{ cursor: "pointer" }} onClick={()=>deleteVideo(data.id)}></Trash2>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton style={{ backgroundColor: "#020512", color: 'white' }}>
          <Modal.Title>
            <h4>{data.title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#020512"}}>
          <iframe
            width="100%"
            height="300"
            src={`${data.videoUrl}/?autoplay=1`}
            title="Tata Motors - Kerala&#39;s Own Car | Onam 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#020512" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoCard;
