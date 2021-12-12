const StateParkInfo = ({ parkData }) => {
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
          <button onClick={() => console.log("adding trip")} className=""> Add to Trip </button>
          <button onClick={() => console.log("adding prev visited")} className=""> Add to Previously Visited </button>
        </>
      ) : (
        <>
          <h2>Click On Marker to see info</h2>
        </>
      )
      }
    </div>
  );
};
export default StateParkInfo;
