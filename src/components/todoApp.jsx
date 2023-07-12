import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);

  function handleInputChange(e) {
      setTitle(e.target.value);
  }

/* function check(e){
  e.target.value === ""
  ? alert("Debe ingresar una tarea")
  : setTitle(e.target.value);
} */

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    const oldTodos = [...todos];
    oldTodos.unshift(newTodo);

    setTodos(oldTodos);
    setTitle("");
  }

  function handleDelete(id) {
    const tempTodos = todos.filter((item) => item.id !== id);

    setTodos([...tempTodos]);
  }

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos([...temp]);
  }

  return (
    <div className="todoContainer">
      <p className="titulo">LISTA DE TAREAS</p>
      <hr />
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input
          onChange={handleInputChange}
          value={title}
          className="todoInput"
        />
        <input value="Crear Tarea" type={"submit"} className="buttonCreate" />
      </form>

      <div className="todosContainer">
        {todos.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
