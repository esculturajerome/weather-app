import "./App.css";
import Weather from "./components/Weather";
import Search from "./components/Search";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="section">
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/weather" component={Weather} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
