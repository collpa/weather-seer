import React from "react";
import SocialButton from "../components/header/SocialButton";
import Title from "../components/header/Title";
import ExplanationText from "../components/body/home-page/ExplanationText";
import SearchBar from "../components/body/home-page/SearchBar";
import SubmitButton from "../components/body/home-page/SubmitButton";

class App extends React.Component {
  render() {
    return (
      <div>
        <SocialButton />
        <Title />
        <ExplanationText />
        <SearchBar />
        <SubmitButton />
      </div>
    );
  }
}

export default App;
