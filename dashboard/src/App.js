import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./views/dashboard/Dashboard.js";
const Profile = React.lazy(() => import("profile/Profile"));
const Projects = React.lazy(() => import("projects/Projects"));
const Button = React.lazy(() => import("projects/Button"));

//Line 31: button names inside components'.js has /profile or /project
//Line 21: Exposing the button directly without creating a route tag and exposing the button created using the react lazy call above

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <React.Suspense fallback={<LoadingModules />}>
        <div className="container mx-auto px-4 mt-16">
          <div>
            <React.Suspense fallback='Loading Button'>
            <Button />  
            </React.Suspense>
          </div>
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/profile" exact> 
              <Profile />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
          </Switch>
          
        </div>
      </React.Suspense>
    </BrowserRouter>
  );
}

function LoadingModules() {
  return <div>Loading...</div>;
}

export default App;
