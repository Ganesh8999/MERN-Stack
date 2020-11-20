import React, { useState, useEffect } from "react";
import "./RomanceCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function RomanceCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/romance/cards");

      setPeople(req.data);
    }
    fetchData();
  }, []);

  // console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing : " + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="romanceCards">
      <div className="romanceCards_cardContainer">
        {people.map((person) => (
          // <h1>{person.name}</h1>
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url( ${person.imgUrl})` }}
            >
              {person.name}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default RomanceCards;
