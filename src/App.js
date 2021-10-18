import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./component/Home/Home";
import Login from './component/Login/Login';
import Navigation from './component/Header/Navigation/Navigation';
import SignUp from './component/SignUp/SignUp';
import Details from './component/Details/Details';
import ContextProvider from './context/ContextProvider';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';



function App() {
  return (
  
      <ContextProvider>
       <Router>
      <Navigation> </Navigation>
      <Switch>
       
       <Route path='/home'>
          <Home> </Home>
       </Route>

       <Route exact path='/'>
          <Home> </Home>
       </Route>

       <Route path='/login'>
         <Login> </Login>
       </Route>

       <Route path='/signup'>
         <SignUp> </SignUp>
       </Route>

       <PrivetRoute path='/details/:id'>
         <Details> </Details>
        </PrivetRoute>

       <Route exact path='*'>
          <h1> Eror </h1>
       </Route>

      </Switch>
    
    </Router>
    </ContextProvider>

  );
}

export default App;
