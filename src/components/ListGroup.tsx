import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //cities = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // cities.map converts all the array elements into li tag format
  return (
    <>
      <h1>{heading}</h1>
      {/* true && something is something in js */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((cities, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={cities}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(cities);
            }}
          >
            {cities}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
