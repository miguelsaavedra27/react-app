import { useState } from "react";

// {cities: [], heading: string}

interface ListGroupProps {
  cities: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: ListGroupProps) {
  // Hook is a function that allows us to add state to a functional component. Using the useState hook, we can add state to a functional component.
  // This returns an array with two elements. The first element is the current value of the state, and the second element is a function that allows us to update the state.
  const [selectedIndex, setSelectedIndex] = useState(-1); // This is called array destructuring. We can use this to get the first and second element of the array.

  // In JSX we don't have for loops, we can use map instead.
  // With bracets we can use JS inside the return statement.
  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>There are no cities to render.</p>}{" "}
      {/* This is a common practice that React developers use to render content dynamically. */}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={index}
            className={
              index === selectedIndex
                ? "list-group-item active" // If the index is equal to the selected index, then add the active class.
                : "list-group-item" // Otherwise, add the default class.
            }
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(city);}
            }
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// In react, a component can't return more than one element.
// To solve this, we can wrap the elements in a div or a fragment to wrap all the children.
