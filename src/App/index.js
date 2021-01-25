import React from "react";
import "./styles.scss";
import SocialButton from "../components/header/SocialButton";
import Title from "../components/header/Title";
import ExplanationText from "../components/body/home-page/ExplanationText";
import SearchBar from "../components/body/home-page/SearchBar";
import SubmitButton from "../components/body/home-page/SubmitButton";
import ImageOfTheWeather from "../components/body/results-page/ImageOfTheWeather";
import WeatherDetails from "../components/body/results-page/WeatherDeatils";

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
            <ImageOfTheWeather />
            <div className={"flex-icons"}>
              <WeatherDetails />
              <WeatherDetails />
              <WeatherDetails />
            </div>
            <div className={"flex-icons"}>
              <WeatherDetails />
              <WeatherDetails />
              <WeatherDetails />
            </div>
            <SubmitButton />
          </>
        ) : (
          <>
            <ExplanationText />
            <SearchBar />
            <SubmitButton />
          </>
        )}
      </div>
    );
  }
}

export default App;
