import React, { Suspense } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Suspense fallback="cargando...">
        <BrowserRouter>
          <TopBar />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
