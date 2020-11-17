import React, { useState } from "react";
import "./RomanceCards.css";
import TinderCard from "react-tinder-card";

function RomanceCards() {
  const [people, setPeople] = useState([
    {
      name: "Tony Stark",
      url:
        "https://qph.fs.quoracdn.net/main-qimg-b6ee08984cd307f5ae86f39371dd1c07",
    },
    {
      name: "Doctor Strange",
      url:
        "https://blogs-images.forbes.com/erikkain/files/2016/11/dr-strange.jpg",
    },
  ]);

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
              style={{ backgroundImage: `url( ${person.url})` }}
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
