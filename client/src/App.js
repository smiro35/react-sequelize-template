import React, { useContext } from "react";
import { AuthProvider, AuthContext } from './AuthContext'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Home/Home";
import NoMatch from "./pages/Messages/Messages";
import MyData from "./pages/Store/Store";
import Login from "./pages/Home/Home";
// import Signup from "./components/SingupForm";
// import TablePage from "./pages/TablePage/TablePage.js";
// import Members from './pages/Home/Members'
import Header from "./components/Header";

// import { AuthProvider } from './AuthContext'
function App(){
  
    // Here we subscribe the authentication context using the useContext hook
    // we use isAuth to determine whether the user is logged in, and setIsAuth
    // to change their status on logout.
    const { isAuth, setIsAuth } = useContext(AuthContext);
    console.log("App auth: ", isAuth)
  
  // here we are ceating a private route wrapper to prevent front end routing to 
  // restricted pages.  The ({ component: Component, ...rest })  argument that is
  // passed to this functional component is essentially the same as just passing 
  // props, but using object destucturing.  the ...rest is literally the rest of 
  // the props that were not destructured. 
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to='/' />
        
      }
    />
  );
  return (
     
      <Router>
        <Switch>
        <Route
          exact
          path="/"
          render={props => <Login {...props} />}
        />
        
          <Route exact path="/Login" component={Login} />
          {/* <Route exact path="/signup" component={Signup} /> */}
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          {/* <PrivateRoute exact path="/members" component={Members} /> */}
          <PrivateRoute exact path="/MyData" component={MyData} />
         {/* <PrivateRoute exact path="/table" component={TablePage} /> */}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    
  )
};
export default () => (
  <AuthProvider>
    <App/>
  </AuthProvider>
);