import { Route, BrowserRouter as  Router, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddList from "./Components/AddList";
import Navbar from "./Components/Navbar";
import './index.css'
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/AddList" component={AddList}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
