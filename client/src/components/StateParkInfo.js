const StateParkInfo = ({parkData}) => {
  return (
    <div className="info col-4">
      <ul>
        {parkData.map((park) => {
          <li key={park.fullName}>{park.fullName}</li>;
        })}
      </ul>
      data goes here
    </div>
  );
};
export default StateParkInfo;
