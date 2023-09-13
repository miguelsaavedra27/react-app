function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  cities = [];

  // In JSX we don't have for loops, we can use map instead.
  // With bracets we can use JS inside the return statement.
  return (
    <>
      <h1>My List Group</h1>
      {cities.length === 0 && <p>There are no cities to render.</p>} {/* This is a common practice that React developers use to render content dynamically. */}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index} className="list-group-item">
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
