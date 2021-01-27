import React from "react";
import "./styles.scss";
import SocialButton from "../shared/SocialButton";
import Title from "../shared/Title";
import ExplanationText from "../home-page/ExplanationText";
import SearchBar from "../home-page/SearchBar";
import ImageOfTheWeather from "../results-page/ImageOfTheWeather";
import WeatherDetails from "../results-page/WeatherDetails";
import MediaQuery from "react-responsive";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResultWeather: true,
    };
  }

  render() {
    return (
      <div>
        <SocialButton />
        <Title />
        {this.state.showResultWeather ? (
          <>
            <MediaQuery maxDeviceWidth={1099}>
              <ImageOfTheWeather />
            </MediaQuery>

            <div className={"weather-details-desktop-container"}>
              <div className={"flex-weather-details-items"}>
                <WeatherDetails label={"dawn"} />
                <WeatherDetails label={"noon"} />
                <WeatherDetails label={"dusk"} />
              </div>

              <MediaQuery minDeviceWidth={1100}>
                <ImageOfTheWeather />
              </MediaQuery>

              <div className={"flex-weather-details-items"}>
                <WeatherDetails label={"high/low"} />
                <WeatherDetails label={"wind"} />
                <WeatherDetails label={"humidity"} />
              </div>
            </div>

            <div className={"center"}>
              <div className={"cta-return-homepage"}>
                <button>{"Check out another city’s weather!"}</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <ExplanationText />
            <SearchBar />
            <div className={"center"}>
              <div className={"submit-button-position"}>
                <button>{"Press Me!"}</button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
