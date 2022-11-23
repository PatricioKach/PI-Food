import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
