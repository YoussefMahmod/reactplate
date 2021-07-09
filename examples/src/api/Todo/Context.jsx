const TodoContext = React.createContext();

export const TodoProvider = (props) => {
  const [todos, setTodo] = React.useState([
    {
      value: "Hello World",
      id: 1,
    },
  ]);
  return (
    <TodoContext.Provider value={[todos, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => React.useContext(TodoContext);
