import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import Sign from "./component/Sign";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <AuthProvider>
        <Switch>
          <Route exact path="/signin" component={Sign} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
