import React, { useState, useEffect } from "react";
require("dotenv").config();

const VisitedParksList = ({ userData }) => {
  const [isLoading, setIsLoading] = useState(true);

  const visitedParksData = [];

  // useEffect(() => {
  //   getParksData(userData);
  // }, [userData]);

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
    setIsLoading(false);
  };

  return (
    <>
      {console.log(`userData: ${userData}`)}
      {/* {getParksData(userData)} */}
      {/* <h2>You have visited {userData.saveVisited.length} parks!</h2> */}
      {/* <h2>You have visited {visitedParksData.length} parks!</h2> */}
      {/* {visitedParksData.length > 0 ? (
        <> */}
          <div className="visited-parks-list">
            {userData.map((park) => (
              <div className="park-preview">
                <h2>{park.fullName}</h2>
                <p>{park.designation}</p>
                <p>{park.description}</p>
                <a href={`tel:${park.phoneNumber}`}>
                  Phone Number: {park.phoneNumber}
                </a>
                <p>{park.address}</p>
                <a href={park.url}>
                  Click here for more information
                </a>
                <h4>Activities</h4>
                <ul>
                  {park.activities.map((activity) => {
                    return <li key={activity.id}> {activity.name} </li>;
                  })}
                </ul>
                <h4>EntranceFees</h4>
                <ul>
                  {park.entranceFees.map((fee) => {
                    return (
                      <li key={fee.description}>
                        ${fee.cost} - {fee.description}{" "}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </>
      // ) : (
      //   <>
      //     <h2>Waiting to fetch data</h2>
      //   </>
      // )}
    // </>
  );
};

export default VisitedParksList;
