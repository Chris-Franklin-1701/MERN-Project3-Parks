import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_VISITED_PARK, SAVE_VISITED } from "../utils/mutations";
import Auth from "../utils/auth";
import { Button, Modal } from "react-bootstrap";

const StateParkInfo = ({ parkData }) => {
  // const [addVisitedPark, { error }] = useMutation(ADD_VISITED_PARK);
  const [saveVisited, { error }] = useMutation(SAVE_VISITED);
  const [showModal, setShowModal] = useState(false);

  // const [tripPark, { error1 }] = useMutation(TRIP_PARK);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleAddVisitedTrip = async (parkData) => {
    console.log(parkData);

    setShowModal(true);

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

    try {
      const response = await saveVisited({
        variables: { parkId: parkData.parkId },
      });
      console.log(response);

      if (!response) {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTripPark = async (parkData) => {
    console.log(parkData);
  };

  return (
    <div className="info col-4" style={{ overflow: "scroll", color: "white" }}>
      {parkData.fullName !== undefined ? (
        <>
          <h2>{parkData.fullName}</h2>
          <p>{parkData.designation}</p>
          <p>{parkData.description}</p>
          <a href={`tel:${parkData.phoneNumber}`}>
            Phone Number: {parkData.phoneNumber}
          </a>
          <p>{parkData.address}</p>
          <a href={parkData.url}>Click here for more information</a>
          <h4>Activities</h4>
          <ul>
            {parkData.activities.map((activity) => {
              return <li key={activity.id}> {activity.name} </li>;
            })}
          </ul>
          <h4>EntranceFees</h4>
          <ul>
            {parkData.entranceFees.map((fee) => {
              return (
                <li key={fee.description}>
                  ${fee.cost} - {fee.description}{" "}
                </li>
              );
            })}
          </ul>
          <button onClick={() => handleTripPark(parkData)} className="">
            {" "}
            Add to Trip{" "}
          </button>
          <button onClick={() => handleAddVisitedTrip(parkData)} className="">
            {" "}
            Add to Previously Visited{" "}
          </button>
          <div style={{ height: 95 }}></div>
        </>
      ) : (
        <>
          <h2>Click on marker to see info</h2>
        </>
      )}
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Park added successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This park has been add to your visited park</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default StateParkInfo;
