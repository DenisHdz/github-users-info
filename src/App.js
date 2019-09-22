import React, { useState } from "react";
import Form from "./Components/Form";
import CardList from "./Components/CardList";

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = userInfo => {
    console.log(userInfo);
    setCards(cards.concat(userInfo));
  };

  return (
    <div>
      <h1>GitHub Users Information</h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  );
};

export default App;
