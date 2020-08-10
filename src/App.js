import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/interface/Header";
import List from "./components/contact/List";
import AddContact from "./components/contact/AddContact";
import About from "./components/pages/About";
import NotFound from  "./components/pages/NotFound";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/list" component={List} />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={List} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
