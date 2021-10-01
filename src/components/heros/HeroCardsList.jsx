import React, { useState, useEffect } from "react";
import Spinner from "../elements/Loading.jsx";
import HeroCard from "./HeroCard.jsx";




const HeroCardsList = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`
        );
        const data = await response.json();
        setHeroes(data);
      
      
      setIsLoading(false);
    };

    fetchData();


  }, []);


  
    let heroList = heroes.map((hero) => ( 
        <HeroCard key={hero.id} hero={hero} />
        ))

    const query = new URLSearchParams(window.location.search);
    const sortQuery = query.get('sort');    

    if(sortQuery === 'z-a') {
        heroList = heroList.reverse();
    } else if (sortQuery === 'marvel') {
        const filterResults = heroes.filter((hero) => hero.biography.publisher === "Marvel Comics");
        heroList = filterResults.map((hero) => ( 
          <HeroCard key={hero.id} hero={hero} />
        ));       
    } else if (sortQuery === 'dc') {
        const filterResults = heroes.filter((hero) => hero.biography.publisher === "DC Comics");
        heroList = filterResults.map((hero) => ( 
          <HeroCard key={hero.id} hero={hero} />
        )) ;      
    } else if (sortQuery === 'good') {
        const filterResults = heroes.filter((hero) => hero.biography.alignment === "good");
        heroList = filterResults.map((hero) => ( 
          <HeroCard key={hero.id} hero={hero} />
        ));
    } else if (sortQuery === 'bad') {
        const filterResults = heroes.filter((hero) => hero.biography.alignment === "bad");
        heroList = filterResults.map((hero) => ( 
          <HeroCard key={hero.id} hero={hero} />
        ));        
    }; 


  return isLoading ? (<Spinner />) : (
    
    <section className="cards container center">
        {heroList}
    </section>
  );
};

export default HeroCardsList;
