import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import Landing from "./components/LandingPage";
import Register1 from "./Register/components/Register1"
import Register from "../src/Register/components/Register"
import Dashboard from "./Dashboard/components/Dashboard"
import Shedule from "./Shedule/components/Shedule"
import Complete from "./SheduleComplete/components/Complete";
import Tracking from "./Track/components/Track";
import DeliveryStatus from "./DeliveryStatus/DeliveryStatus";
import AuthState from "../src/Context/auth/authState";
import AlertState from "../src/Context/alert/alertState";
import Login from "../src/LoginFolder/components/Login";
import RegisterVerified from "../src/RegisterVerified/components/RegisterVerified"
import PrivateRoute from "./routing/PrivateRoute"
import Alerts  from "./components/Alert";
import Manage from "./Manage Wallet/components/Manage"

function App() {
  return (
    <AuthState>
      <AlertState>
        <>
          <Alerts />
          <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard}></PrivateRoute>
          <PrivateRoute exact path="/schedule" component={Shedule}></PrivateRoute>
          <PrivateRoute exact path="/tracking" component={Tracking}></PrivateRoute>
          <PrivateRoute exact path="/delivery status" component={DeliveryStatus}></PrivateRoute>
          <PrivateRoute path="/managewallet" component={Manage}></PrivateRoute>
          <Route exact path="/register1" component={Register1}></Route>
          <Route exact path="/register2" component={Register}></Route>
          <Route exact path='/' component={Landing} />
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/complete" component={Complete}></Route>
          <Route exact path="/register_verified"  component={RegisterVerified}></Route>
          </Switch>
        </>
      </AlertState>
    </AuthState>
  );
}

export default App;
