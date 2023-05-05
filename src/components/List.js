import Item from "./Item";

const List = ( {todo} ) => {

  return (
    <div className="todo-list">
      {todo.map((item) => (
        <Item key={item.id} todo={item} /> // todo is prop passed from Item
      ))}
    </div>
  );
};

export default List;

// loop thru all of our todos
// pass prop with Item into List
// render one Item with todo prop for each todo
