import Item from "./Item";

const List = ( {todo, handleDelete} ) => {

  if (!todo || todo.length === 0) {
    return <p>No Todo's yet!</p>
  }

  return (
    <div className="todo-list">
      {todo.map((item) => (
        <Item key={item.id} todo={item} handleDelete={handleDelete} /> // todo is prop passed from Item
      ))}
    </div>
  );
};

export default List;

// loop thru all of our todos
// pass prop with Item into List
// render one Item with todo prop for each todo
