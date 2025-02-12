import React, { useState } from "react";
import "./AddItem.css";
import ListItem from "./ListItem";

const AddItem = () => {
  const [item, setItem] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    setItem((prevItem) => [...prevItem, inputValue]);
    setInputValue("");
  };

  const handleRemove = (indexToRemove: number) => {
    setItem((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };
  return (
    <div>
      <input
        placeholder="Enter items"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddItem}>Add Item</button>

      <div className="heading">
        <center>
          <h3>TODO Lists</h3>
        </center>
      </div>
      <ul>
        {item.map((element, index) => (
          <li>
            {" "}
            <ListItem
              key={index}
              index={index}
              title={element}
              onRemove={handleRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddItem;
