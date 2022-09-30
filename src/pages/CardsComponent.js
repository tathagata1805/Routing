import React from "react";


// DUMMY CARDS COMPONENT (PUBLIC ROUTE)
const Cards = () => {
  return (
    <div className="ui container center">
      <div className="home-profile">
        <div className="ui message warning">
          <h3>This is not Protected Route</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
