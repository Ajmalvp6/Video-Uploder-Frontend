import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Col, Row } from "react-bootstrap";
import { accessVideoApi } from "../Services/allApis";

function Videos({updateData}) {

  const [allVieos,setVideos]=useState([])

  // state to video delete update

  const [videoUpdate,setVideoDelete]=useState(false)


  const getVideos=async()=>{
    const result = await accessVideoApi()
    if(result.status>=200 && result.status<300){
      console.log(result.data);
      setVideos(result.data)
      
      
    }
    else{
      alert('access video failed')
    }
    
  }

  useEffect(()=>{
    getVideos()
  },[updateData,videoUpdate])


  
  




  return (
    <div>
     <div className="p-3">
          <Row>
            
            {
              
                allVieos?.length>0 ? (
                  allVieos?.map(i=>(
                    <Col lg={4} className="mt-3">
                    
                    <VideoCard data={i} deletedata={setVideoDelete}></VideoCard>
                    </Col>
                  ))
                ):
             

              <h1>no videos Added Yet</h1>
            }
             
           
          </Row>
     </div>
    </div>
  );
}

export default Videos;
