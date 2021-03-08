import Navigation from "./layouts/navigation/Navigation";
import Dashboard from "./pages/dashboard/Dashboard";
import Risk from "./pages/risk/Risk";
import "./App.css";
import RiskInsights from "./layouts/risk-insights/RiskInsights";
import { Route, Switch } from "react-router-dom"
import Device from "./pages/device/Device";
import { withRouter, Redirect } from "react-router-dom";




function App({location}) {
  console.log(location);
  return (
    <div className="main-page">
      <Navigation />
        <Switch>
          <Route exact path="/users" render={() => <div>Users</div>} />
          <Route exact path="/chat" render={() => <div>Chat</div>} />
          <Route exact path="/device" component={Device} />
          <Route exact path="/graph" component={Risk} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to='/dashboard'/>
      </Switch>
      {location.pathname !== "/graph" && <RiskInsights />}
      
    
    </div>
    
  );
}

export default withRouter(App);
