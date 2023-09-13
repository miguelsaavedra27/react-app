function ListGroup() {
  return (
    <>
        <h1>My List Group</h1>
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
    </>
  );
}

export default ListGroup;

// In react, a component can't return more than one element.
// To solve this, we can wrap the elements in a div or a fragment to wrap all the children.