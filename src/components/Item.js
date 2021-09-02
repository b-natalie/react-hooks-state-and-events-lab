import React, { useState } from "react";

function Item({ name, category }) {

  const [ isAdded, setAdded ] = useState(false);
  const itemClass = isAdded ? "in-cart" : "";

  function handleAdded() {
    setAdded(!isAdded);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdded}>
        {isAdded ? "Remove from cart": "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
