import { Route, BrowserRouter as  Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddList from "./Components/AddList";
import Navbar from "./Components/Navbar";
import './index.css'
import Tasks from "./Components/Tasks";
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AddList" component={AddList}/>
          <Route path="/Tasks/:id" component={Tasks}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
