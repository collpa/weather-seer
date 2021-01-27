import "./styles.scss";

const WeatherDetails = (props) => {
  return (
    <div className={"container-position"}>
      <div className={"icon-position"}>
        <img src={"https://via.placeholder.com/60"} alt={"Icon frame"} />
      </div>
      <p>{props.label}</p>
    </div>
  );
};

export default WeatherDetails;
