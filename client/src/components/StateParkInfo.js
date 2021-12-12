import { useMutation } from '@apollo/react-hooks';
// import { ADD_VISITED_PARK, TRIP_PARK } from './utils/mutations';

const StateParkInfo = ({ parkData }) => {
  // const [addVisitedPark, { error }] = useMutation(VISITED_PARK);

  // const [tripPark, { error1 }] = useMutation(TRIP_PARK);

  const handleAddVisitedTrip = async (parkData) => {
    console.log(parkData)
  }

  const handleTripPark= async (parkData) => {
    console.log(parkData)
  }

  return (
    <div className="info col-4">
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
          <div style={{height:95}}></div>
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
