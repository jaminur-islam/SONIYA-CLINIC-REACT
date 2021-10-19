import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Navigation from "./component/Header/Navigation/Navigation";
import SignUp from "./component/SignUp/SignUp";
import Details from "./component/Details/Details";
import ContextProvider from "./context/ContextProvider";
import PrivetRoute from "./component/PrivetRoute/PrivetRoute";
import Error from "./component/Error/Error";
import Order from "./component/Order/Order";
import Confrim from "./component/Confrim/Confrim";
import Tips from "./component/Tips/Tips";
import Homeservice from "./component/HomeDelevery/Homeservice";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Navigation> </Navigation>
        <Switch>
          <Route path="/home">
            <Home> </Home>
          </Route>

          <Route exact path="/">
            <Home> </Home>
          </Route>

          <Route path="/login">
            <Login> </Login>
          </Route>

          <Route path="/signup">
            <SignUp> </SignUp>
          </Route>

          <PrivetRoute path="/details/:id">
            <Details> </Details>
          </PrivetRoute>

          <PrivetRoute exact path="/homeservice">
            <Homeservice></Homeservice>
          </PrivetRoute>

          <PrivetRoute path="/order/:id">
            <Order> </Order>
          </PrivetRoute>

          <PrivetRoute path="/tips">
            <Tips> </Tips>
          </PrivetRoute>

          <PrivetRoute exact path="/orderdone">
            <Confrim> </Confrim>
          </PrivetRoute>

          <Route exact path="*">
            <Error> </Error>
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
