import React from "react";

const Character = ({ name, birthYear, homeworld }) => {
  console.log(homeworld)

  return (
    <div>
      <h3>{name}</h3>
      <p>Birth Year: {birthYear}</p>
      <p>{homeworld}</p>
    </div>
  );
};

export default Character;
