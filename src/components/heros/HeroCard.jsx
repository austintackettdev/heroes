import React from "react";
import { Link } from "@reach/router";
import 'animate.css'


const HeroCard = ({ hero }) => {
  return (
    
    <div className="card animate__animated animate__fadeIn">
        <img src={hero.images.lg} alt={hero.name} />
      <div className="info">
        <h1>{hero.name}</h1>
        <p><strong>Full Name</strong><br />{hero.biography.fullName}</p>
        <Link to={`/details/${hero.id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
    
  );

}


export default HeroCard;
