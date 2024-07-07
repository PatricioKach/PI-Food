import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Home from "./pages/Home/Home.jsx";
import CardDetail from "./components/CardDetail/CardDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/recipes/:id" component={CardDetail} />
    </Switch>
  );
}

export default App;
