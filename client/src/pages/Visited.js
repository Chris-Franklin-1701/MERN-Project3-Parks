import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import VisitedParksList from "../components/VisitedParksList";
import "../index.css";
require("dotenv").config();

const Visited = () => {
  const { loading, data } = useQuery(GET_ME);

  const userData = data?.me || [];

  const visitedParksData = [];

  const getParksData = (userData) => {
    console.log("calling getParksData");
    for (let i = 0; i < userData.saveVisited.length; i++) {
      const npsRequestURL = `https://developer.nps.gov/api/v1/parks?id=${userData.saveVisited[i].parkId}&api_key=${process.env.REACT_APP_NPS_API_KEY}`;

      fetch(npsRequestURL).then((response) => {
        if (response.ok) {
          response.json().then((results) => {
            // console.log("fetch!!!!");
            // console.log(results);
            const visitedParkData = {};
            visitedParkData.url = results.data[0].url;
            visitedParkData.fullName = results.data[0].fullName;
            visitedParkData.description = results.data[0].description;
            visitedParkData.designation = results.data[0].designation;
            visitedParkData.latitude = results.data[0].latitude;
            visitedParkData.longitude = results.data[0].longitude;
            visitedParkData.activities = results.data[0].activities;
            visitedParkData.phoneNumber =
              results.data[0].contacts.phoneNumbers[0].phoneNumber;
            visitedParkData.address = `${results.data[0].addresses[0].line1}, ${results.data[0].addresses[0].line2}, ${results.data[0].addresses[0].line3} ${results.data[0].addresses[0].city} ${results.data[0].addresses[0].stateCode} ${results.data[0].addresses[0].postalCode}`;
            visitedParkData.entranceFees = results.data[0].entranceFees;
            visitedParkData.entrancePasses = results.data[0].entrancePasses;
            visitedParkData.images = results.data[0].images;
            visitedParksData.push(visitedParkData);
          });
          console.log(visitedParksData);
        }
      });
    }
  };



  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {getParksData(userData)}
          {console.log(`visitedParksData: ${visitedParksData}`)}
          You have {userData.saveVisited.length} visited parks
          <VisitedParksList userData={visitedParksData} />
        </>
      )}
    </div>
  );
};

export default Visited;
