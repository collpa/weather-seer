import "./styles.scss";
import searchlensimg from "../../../../assets/searchlens.png";

const SearchBar = () => {
  return (
    <div className={"container-search-bar"}>
      <div>
        <input placeholder={"example: London"}></input>
        <img src={searchlensimg} alt={"Search lens icon"} />
      </div>
    </div>
  );
};

export default SearchBar;
