import React from 'react';
import { Link } from "@reach/router";

const Filters = () => {

    return (
          <section className="container">
            <h2>Popular Filters</h2>  
            <Link to={`/`} className="filter-btn">A-Z</Link>
            <Link to={`/?sort=z-a`} className="filter-btn">Z-A</Link>
            <Link to={`/?sort=marvel`} className="filter-btn">Marvel Comics</Link>
            <Link to={`/?sort=dc`} className="filter-btn">DC Comics</Link>
            <Link to={`/?sort=good`} className="filter-btn">Heroes Only</Link>
            <Link to={`/?sort=bad`} className="filter-btn">Villains Only</Link>
          </section>
    )

}

export default Filters