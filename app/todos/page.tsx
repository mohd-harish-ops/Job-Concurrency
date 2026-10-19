import type { Metadata } from "next";
import TodoApp from "../components/TodoApp";

export const metadata: Metadata = {
  title: "Todos",
};

export default function TodosPage() {
  return (
    <>
      <h1 className="title" style={{ textAlign: "center" }}>
        Todo List
      </h1>
      <p className="subtitle" style={{ textAlign: "center" }}>
        Tasks aapke browser me save hote hain (localStorage).
      </p>
      <TodoApp />
    </>
  );
}
