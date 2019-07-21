import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Create, List, Edit, Details, Login } from './pages';
import { Header } from './components';
import { WithAuthorization, NoAuthorization } from "./ProtectedRoute";

const ProtectedCreate = WithAuthorization(Create);
const ProtectedList = WithAuthorization(List);
const ProtectedEdit = WithAuthorization(Edit);
const ProtectedDetails = WithAuthorization(Details);
const ProtectedLogin = NoAuthorization(Login);

function Routing() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProtectedLogin} />
          <Route path="/list" exact component={ProtectedList} />
          <Route path="/details/:id" component={ProtectedDetails} />
          <Route path="/edit/:id" component={ProtectedEdit} />
          <Route path="/create" component={ProtectedCreate} />
        </Switch>
    </Router>
  );
}

export default Routing;