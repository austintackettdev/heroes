import React from "react";
import { Router } from "@reach/router";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import HeroCardsList from "./components/heros/HeroCardsList.jsx";
import HeroDetails from "./components/heros/HeroDetails.jsx";
import Filters from "./components/elements/Filters.jsx"
import "./Styles.css";



class App extends React.Component {

    render(){
        return (
            <div>
                <Header />
                <Filters />
                <Router>
                  <HeroCardsList path="/" />
                  <HeroDetails path="/details/:id" />
                </Router>
                <Footer />
            </div>
            
        )
    }
}

export default App;
