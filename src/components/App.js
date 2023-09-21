import React, { useState } from "react";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  const [fruitItem, setFruitItem] = useState(fruits);

  function handleSearchInput(e) {
    let filteredFruit = fruits.filter(
      (fruit) => fruit.indexOf(e.target.value) > -1
    );
    setFruitItem(filteredFruit);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search item</h1>
      <input type="text" onChange={handleSearchInput} />
      <ul>
        {fruitItem.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;