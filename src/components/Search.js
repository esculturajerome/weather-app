import "./Search.css";
import SearchLogo from "../img/search.svg";

import { fetchWeather } from "../api/fetchweather";
import { useState } from "react";
import NavBar from "./NavBar";

export default function Search(props) {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async () => {
    const data = await fetchWeather(query);
    if (data.cod === "200") {
      setWeather(data);
      setQuery("");

      props.history.push({
        pathname: "/weather",
        state: data,
      });
    } else {
      console.log("Error Found");
    }
  };

  function keyPress(e) {
    if (e.key === "Enter") {
      search();
    }
  }
  return (
    <>
      <NavBar />
      <div className="search">
        <div className="search__container">
          <h2 className="search__title">Mabuhay!</h2>
          <p className="search__subtitle">
            I-type ang iyong lugar na nais hanapin.
          </p>
          <div className="search__field">
            <input
              autoFocus
              required
              className="search__input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={keyPress}
            />
            <img
              className="search__logo"
              onClick={search}
              src={SearchLogo}
              alt="Netflix logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}
