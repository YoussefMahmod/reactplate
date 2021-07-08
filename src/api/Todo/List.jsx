import Todo from "@/api/Todo";
import { useTodo } from "@/api/Todo/Context";

const List = () => {
  const [todos] = useTodo();

  const list = () => {
    if (todos instanceof Array) {
      return todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      });
    }
  };

  return <div className="todo-wrapper">Todo List : {list()}</div>;
};

export default List;
