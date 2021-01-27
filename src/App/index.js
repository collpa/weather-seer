import React from "react";
import "./styles.scss";
import SocialButton from "../components/header/SocialButton";
import Title from "../components/header/Title";
import ExplanationText from "../components/body/home-page/ExplanationText";
import SearchBar from "../components/body/home-page/SearchBar";
import ImageOfTheWeather from "../components/body/results-page/ImageOfTheWeather";
import WeatherDetails from "../components/body/results-page/WeatherDetails";
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

            <div className={"cta-return-homepage"}>
              <button>{"Check out another city’s weather!"}</button>
            </div>
          </>
        ) : (
          <>
            <ExplanationText />
            <SearchBar />
            <div className={"submit-button-position"}>
              <button>{"Press Me!"}</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
