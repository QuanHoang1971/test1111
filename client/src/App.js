import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";

import { BrowserRouter, Route } from "react-router-dom";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
