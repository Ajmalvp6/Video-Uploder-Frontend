import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import {
  addCategoryApi,
  deleteCategoryApi,
  getAllcategory,
  singleVideoApi,
  updateCategoryApi,
} from "../Services/allApis";
import { Trash2 } from "react-feather";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ca } from "date-fns/locale";

function Categories() {
  const [inputsCate, setInputsCate] = useState("");

  const [allCategories, setAllCategories] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const draggigOver = (e, id) => {
    e.preventDefault();
    console.log("dragging over" + id);
  };

  const dropped = async (e, id) => {
    console.log("dropped cat " + id);
    var catId = id;
    // Access video id
    var videoId = e.dataTransfer.getData("cardId");
    console.log(videoId);

    var category = allCategories.find((i) => i.id == catId);
    console.log(category);

    var result = await singleVideoApi(videoId);

    var videoData = result.data;

    console.log(videoData);

    category.Videos.push(videoData);
    console.log(category);

    await updateCategoryApi(catId, category);
    accessAllCategories();
  };

  const addingCate = async () => {
    if (inputsCate == "") {
      alert("please fill category name");
    } else {
      var bodyData = {
        catagoryName: inputsCate,
        Videos: [],
      };

      const result = await addCategoryApi(bodyData);

      if (result.status >= 200 && result.status < 300) {
        // alert('category added successfully')

        toast.success("category added successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
        handleClose();
        accessAllCategories();
      }
    }
  };

  const accessAllCategories = async () => {
    const result = await getAllcategory();
    setAllCategories(result.data);
  };

  const deleteCate = async (id) => {
    const result = await deleteCategoryApi(id);
    // alert("category deleted  successfully")

    toast.success("category deleted  successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
    accessAllCategories();
  };

  useEffect(() => {
    accessAllCategories();
  }, []);

  return (
    <div>
      <div className="text-center pe-5 mt-4">
        <Button
          className="text-white p-2 rounded border w-50 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.205" }}
          color="white"
          onClick={handleShow}
        >
          Add New Categary
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#020512" }}>
          <Modal.Title>
            <h1 id="d3">Add New Category</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#020512" }}>
          <>
            <FloatingLabel
              controlId="floatingInput"
              label="Category Name"
              className="mb-3 text-dark"
            >
              <Form.Control
                onChange={(e) => setInputsCate(e.target.value)}
                type="text"
                placeholder="Category name"
              />
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
            onClick={addingCate}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {allCategories?.length > 0 ? (
        allCategories.map((i) => (
          <div
            droppable
            onDrop={(e) => dropped(e, i.id)}
            onDragOver={(e) => draggigOver(e, i.id)}
            className="border text-center p-5 m-3 rounded"
          >
            <div className="text-end d-flex justify-content-between">
              <h4>{i.catagoryName}</h4>
              <Trash2
                color="red"
                style={{ cursor: "pointer" }}
                onClick={() => deleteCate(i.id)}
              ></Trash2>
            </div>

            <marquee>
              <div className="d-flex">
                {i.Videos?.length > 0 &&
                  i.Videos.map((video) => (
                    <div>
                      <img className="ms-3"
                        style={{ height: "90px", width: "90px" }}
                        src={video.coverImage}
                        alt='thubnail'
                      />
                    </div>
                  ))}
              </div>
            </marquee>
          </div>
        ))
      ) : (
        <h1>No catogries added yet</h1>
      )}

      <ToastContainer />
    </div>
  );
}

export default Categories;
