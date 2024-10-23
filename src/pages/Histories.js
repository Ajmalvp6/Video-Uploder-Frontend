import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Trash } from "react-feather";
import { Link } from "react-router-dom";
import {
  accessHistories,
  deleteCategoryApi,
  deleteHistoryApi,
} from "../Services/allApis";


function Histories() {
  const [allhistories, setAllhistories] = useState([]);

  const getHistories = async () => {
    const result = await accessHistories();
    setAllhistories(result.data);
  };

  // delete history

  const deleteHistory = (id) => {
    deleteHistoryApi(id);
    getHistories();
  };

  // sorting for recently watched

  const recentlyWatched = () => {
    const sortedData = [...allhistories];
    sortedData.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    setAllhistories(sortedData); // Update the state with the sorted data
  };

  useEffect(() => {
    getHistories();
  }, []);

  console.log(allhistories);

  return (
    <div>
      <Container>
        <div className="d-flex my-2 justify-content-between">
          <h1 className="text-center my-2 pb-3">Watch History</h1>
          <Link to={"/home"}>
            <Button
              style={{
                backgroundColor: "brown",
                color: "white",
                border: "none",
              }}
              className="p-2 rounded px-4"
            >
              Back To Home
            </Button>
          </Link>
        </div>
        <div>
          {allhistories?.length > 0 && (
            <Button
              onClick={recentlyWatched}
              style={{
                backgroundColor: "brown",
                color: "white",
                border: "none",
              }}
              className="p-2 rounded px-4 mb-3"
            >
              Recently watched
            </Button>
          )}
        </div>

        <Table striped>
          <thead>
            <tr>
              <th className="text-white" id="d">
                no
              </th>
              <th className="text-white" id="d">
                Date & Time
              </th>
              <th className="text-white" id="d">
                Title
              </th>
              <th className="text-white" id="d">
                Utube URL
              </th>
              <th className="text-white" id="d"></th>
            </tr>
          </thead>
          <tbody>
            {allhistories?.length > 0 ? (
              allhistories.map((i, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{i.datetime}</td>
                  <td>{i.title}</td>
                  <td>{i.videoUrl}</td>
                  <td>
                    <Trash
                      color="red"
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteHistory(i.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  no watched added yet
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Histories;
