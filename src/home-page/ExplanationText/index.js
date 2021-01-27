import "./styles.scss";
import MediaQuery from "react-responsive";

const ExplanationText = () => {
  return (
    <>
      <MediaQuery minDeviceWidth={1100}>
        <p>
          {
            "Enter the name of a city then click on the button below and find out what is the weather expected for tomorrow!"
          }
        </p>
      </MediaQuery>

      <MediaQuery maxDeviceWidth={1099}>
        <p>
          {"Enter the name of a city then click on the button below"}
          <br />
          {"and find out what is the weather expected for tomorrow!"}
        </p>
      </MediaQuery>
    </>
  );
};

export default ExplanationText;
