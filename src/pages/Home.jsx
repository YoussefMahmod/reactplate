import AddTodo from "@/api/Todo/Add";
import TodoList from "@/api/Todo/List";
import { TodoProvider } from "@/api/Todo/Context";
import Logo from "#/Logo";

export default function Home() {
  return (
    <TodoProvider>
      <Logo />
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
