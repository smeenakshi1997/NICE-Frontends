import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Line 10&17: Button hidden in call from dashboard. Can be included within react.suspense if needed. Available in its own port.
import Projects from "./views/projects/Projects";
import Button from "./views/projects/Button";

function App() {
  return (
    <div>
      <h1>Projects</h1>
      <Button>
        {' '}
        Projects Button
      </Button>
      <BrowserRouter>
      <React.Suspense fallback={<LoadingModules />}>
        <Switch>
          <Route path="/" exact>
            <Projects />
          </Route>
        </Switch>
      </React.Suspense>
    </BrowserRouter>
    </div>
  );
}

function LoadingModules() {
  return <div>Loading...</div>;
}

export default App;
