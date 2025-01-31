import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Components/Home";
import AddList from "./Components/AddList";
import Navbar from "./Components/Navbar";
import ViewTasks from "./Components/ViewTask";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-nav">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/AddList" component={AddList} />
            <Route path="/ViewTask/:id" component={ViewTasks} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
