/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Spinner from "../elements/Loading.jsx";

const HeroDetails = ({ id }) => {
  const [hero, setHero] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      const response = await fetch(
        `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
      );
      const data = await response.json();

      console.log(data);
      setHero(data);
      setIsLoading(false);
    };
    fetchHeroData();
  }, [id]);

  function goBack() {
    window.history.back();
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="hero-details container">
      <img src={hero.images.sm} alt={hero.name} />
      <div className="hero-card-info">
        <h2>{hero.name}</h2>
        <div className="primary-title">
          <p><strong>Publisher:</strong></p>
          <p>{hero.biography.publisher}</p>
        </div>
        <div className="primary-title">
          <p><strong>Full Name:</strong></p>
          <p>{hero.biography.fullName}</p>
        </div>
        <div className="primary-title">
          <p><strong>First Appearance:</strong></p>
          <p>{hero.biography.firstAppearance}</p>
        </div>
        <div className="primary-title">
          <p><strong>Alignment:</strong></p>
          <p>{hero.biography.alignment}</p>
        </div>
        <div className="primary-title">
          <p><strong>Race:</strong></p>
          <p>{hero.appearance.race}</p>
        </div>
        <div className="primary-title">
          <p><strong>Group Affiliations:</strong></p>
          <p>{hero.connections.groupAffiliation}</p>
        </div>
        <div className="primary-title">
          <p><strong>Occupation:</strong></p>
          <p>{hero.work.occupation}</p>
        </div>
        <div className="hero-powers">
          {Object.entries(hero.powerstats).map((key) => (
            <p key={key[0]}>
              {key[0].charAt(0).toUpperCase() + key[0].slice(1)}: {key[1]}
            </p>
          ))}
        </div>
        <div style={{marginTop: ".5em", textAlign: "right"}}>
          <a href="javascript:void(0)" onClick={goBack} className="btn">Back to Results</a>
        </div>
        
      </div>
    </div>
  );
};

export default HeroDetails;
