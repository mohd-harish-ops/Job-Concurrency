"use client";

import { useEffect, useState } from "react";

type Todo = { id: string; text: string; done: boolean };
type Filter = "all" | "active" | "completed";

const STORAGE_KEY = "nextstarter-todos";

function makeId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [loaded, setLoaded] = useState(false);

  // Browser ki localStorage se todos load karo (sirf client par)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setTodos(JSON.parse(saved) as Todo[]);
    } catch {
      // kharab data ho to ignore karo
    }
    setLoaded(true);
  }, []);

  // Har change par save karo
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos, loaded]);

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    setTodos((prev) => [{ id: makeId(), text: value, done: false }, ...prev]);
    setText("");
  }

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function clearCompleted() {
    setTodos((prev) => prev.filter((t) => !t.done));
  }

  const visible = todos.filter((t) =>
    filter === "all" ? true : filter === "active" ? !t.done : t.done
  );
  const remaining = todos.filter((t) => !t.done).length;
  const hasCompleted = todos.some((t) => t.done);

  return (
    <div className="todo-box">
      <form className="todo-form" onSubmit={addTodo}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Naya task likho..."
          aria-label="New task"
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>

      <div className="filters">
        {(["all", "active", "completed"] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty">{loaded ? "Koi task nahi hai." : "Loading..."}</p>
      ) : (
        <ul className="todo-list">
          {visible.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                aria-label={`Mark "${todo.text}" as done`}
              />
              <span>{todo.text}</span>
              <button
                type="button"
                className="icon-btn"
                onClick={() => deleteTodo(todo.id)}
                aria-label={`Delete "${todo.text}"`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="todo-footer">
        <span>{remaining} task baaki</span>
        {hasCompleted && (
          <button type="button" className="link-btn" onClick={clearCompleted}>
            Completed hatao
          </button>
        )}
      </div>
    </div>
  );
}
