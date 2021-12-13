import { useMutation } from '@apollo/client';
import { ADD_VISITED_PARK, SAVE_VISITED } from '../utils/mutations';
import Auth from '../utils/auth';
import background from '../assets/images/Among-the-Giants.png';

const StateParkInfo = ({ parkData }) => {
  // const [addVisitedPark, { error }] = useMutation(ADD_VISITED_PARK);
  const [saveVisited, { error }] = useMutation(SAVE_VISITED)

  // const [tripPark, { error1 }] = useMutation(TRIP_PARK);

  const handleAddVisitedTrip = async (parkData) => {
    console.log(parkData)

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false
    }

    try {
      const response = await saveVisited({
        variables: { parkId: parkData.parkId }
      })
      console.log(response)

      if (!response) {
        throw new Error("Something went wrong")
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleTripPark= async (parkData) => {
    console.log(parkData)
  }

  return (
    <div className="info col-4" style={{overflow: "scroll", backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", color: "white"}}>
      {console.log(parkData.fullName !== undefined)}
      {parkData.fullName !==undefined ? (
        <>
          <h2>{parkData.fullName}</h2>
          <p>{parkData.description}</p>
          <p>{parkData.designation}</p>
          <ul>
            {parkData.activities.map((activity) => {
              return (
                <li key={activity.id} > {activity.name} </li>
              )
            })
            }
          </ul>
          <p>{parkData.phoneNumber}</p>
          <p>{parkData.address}</p>
          <ul>
            {parkData.entranceFees.map((fee) => {
              return (
                <li key={fee.title} > {fee.title} </li>
              )
            })
            }
          </ul>
          <ul>
            {parkData.entrancePasses.map((pass) => {
              return (
                <li key={pass.title} > {pass.title} </li>
              )
            })
            }
          </ul>
          <button onClick={() => handleTripPark(parkData)} className=""> Add to Trip </button>
          <button onClick={() => handleAddVisitedTrip(parkData)} className=""> Add to Previously Visited </button>
          {/* <div style={{height:95}}></div> */}
        </>
      ) : (
        <>
          <h2>Click on marker to see info</h2>
        </>
      )
      }
    </div>
  );
};
export default StateParkInfo;
