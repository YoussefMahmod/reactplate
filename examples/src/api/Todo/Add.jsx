import { useTodo } from "@/api/Todo/Context";

const AddTodo = () => {
  const [todo, setTodo] = React.useState("");
  const [, setTodos] = useTodo();

  const updateValue = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        value: todo,
        id: prevTodos.slice(-1)[0] ? prevTodos.slice(-1)[0].id + 1 : 1,
      },
    ]);
  };

  return (
    <form className="todo-add-form" onSubmit={addTodo}>
      <input
        type="text"
        value={todo}
        placeholder="Add todo"
        onChange={updateValue}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTodo;
