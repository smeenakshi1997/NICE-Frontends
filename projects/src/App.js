import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Projects from "./views/projects/Projects";
import Button from "./views/projects/Button";

function App() {
  return (
    <div>
      <BrowserRouter>
      <React.Suspense fallback={<LoadingModules />}>
        <h1>Projects</h1>
        <Button>
          {' '}
          Projects Button
        </Button>
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
