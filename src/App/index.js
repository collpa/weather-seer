import React from "react";
import SocialButton from "../components/header/SocialButton";
import Title from "../components/header/Title";
import ExplanationText from "../components/body/home-page/ExplanationText";

class App extends React.Component {
  render() {
    return (
      <div>
        <SocialButton />
        <Title />
        <ExplanationText />
      </div>
    );
  }
}

export default App;
