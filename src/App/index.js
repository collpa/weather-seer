import React from "react";
import SocialButton from "../components/header/SocialButton";
import Title from "../components/header/Title";
import ExplanationText from "../components/body/home-page/ExplanationText";
import SearchBar from "../components/body/home-page/SearchBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <SocialButton />
        <Title />
        <ExplanationText />
        <SearchBar />
      </div>
    );
  }
}

export default App;
