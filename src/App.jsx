import "./App.css";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([
    {
      id: 1,
      name: "Item 1",
      description: "This is item 1",
      check: "yes",
    },
    {
      id: 2,
      name: "Item 2",
      description: "This is item 2",
      check: "yes",
    },
    {
      id: 3,
      name: "Item 3",
      description: "This is item 3",
      check: "yes",
    },
  ]);

  let addItem = () => {
    setItems((prevItems) => [...prevItems, ...item]);
  };

  let check = () => {
    // console.log(items.filter((item) => item.check === "yes"));
    // items.forEach((item) => {
    //   console.log(item.name);
    // });
    // console.log(items.map((item) => item.name));
    console.log(items.find((item) => item.check === "yes"));
  };

  return (
    <div>
      <h1>Item List</h1>
      {items.length === 0 && <p>No items available</p>}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
      console.log(items);
      <br /> <br />
      <h1> Add Items </h1> <br />
      <input type="text" placeholder="Item Name" />
      <input type="text" placeholder="Item Description" />
      <button onClick={addItem}>Add Items</button>
      <div>
        <button onClick={check}> CHeck</button>
      </div>
    </div>
  );
}

export default App;
