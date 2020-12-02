import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./app/views/home/home";
import About from "./app/views/about/about";
import Coaching from "./app/views/coaching/coaching";
import Blog from "./app/views/blog/blog";
import Podcast from "./app/views/podcast/podcast";
import Contact from "./app/views/contact/contact";
import Success from "./app/views/contact/success";
import "./App.scss";
import logo from "./assets/images/RRC-Icon.png";

function App() {
  var getDate = new Date();
  var getYear = getDate.getFullYear();

  return (
    <div className="app">
      <BrowserRouter>
        <header className="masthead">
          <div className="logo">
            <Link to="/home">
              <img src={logo} alt="Richard Reid Coaching" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/coaching">Coaching</Link>
              </li>
              <li>
                <Link to="/podcast">Podcasts</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="c-contain c-vh">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/coaching" component={Coaching} />
            <Route exact path="/podcast" component={Podcast} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/success" component={Success} />
          </Switch>
        </div>
        <footer className="u-p-gi">
          <p>© Richard Reid Coaching {getYear}</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
