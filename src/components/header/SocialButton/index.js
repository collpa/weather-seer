import githubimg from "./../../../assets/github.png";
import linkedinimg from "./../../../assets/linkedin1.png";
import "./styles.scss";

function SocialButton(props) {
  return (
    <div className="socialbutton-position">
      <a href="https://github.com/collpa/weather-seer" target="blank">
        <img
          src={githubimg}
          alt="GitHub icon"
          className="socialbutton-dimension"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/paola-collu-2889371b4/"
        target="blank"
      >
        <img
          src={linkedinimg}
          alt="Linkedin Icon"
          className="socialbutton-dimension"
        />
      </a>
    </div>
  );
}

export default SocialButton;
