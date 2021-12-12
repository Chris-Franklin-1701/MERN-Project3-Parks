const StateParkInfo = ({parksDataArr}) => {
  return (
    <div className="info col-4">
      <ul>
        {parksDataArr.map((park) => {
          <li key={park.fullName}>{park.fullName}</li>;
        })}
      </ul>
      data goes here
    </div>
  );
};
export default StateParkInfo;
