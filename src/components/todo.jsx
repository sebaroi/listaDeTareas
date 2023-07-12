import React from "react";
import { useState } from "react";
import "./todoApp.css";


export default function Todo({ item, onUpdate, onComplete, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.title ?? "");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleUpdate() {
    onUpdate(item.id, value);
    setIsEdit(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate(item.id, value);
    setIsEdit(false);
  }


  return (
    <div className="todo">
      {isEdit ? (
        <form onSubmit={handleSubmit} className="todoUpdateForm">
          <input
            className="todoInput"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <button className="button" onClick={handleUpdate}>
          Aceptar 
          </button>
        </form>
      ) : (
        <div className="todoInfo">
          <span
            className="todoTitle"
          >
            {item.title}
          </span>
          <button className="button" onClick={() => setIsEdit(true)}>
            Editar
          </button>
          <button className="buttonDelete" onClick={() => onDelete(item.id)}>
          Realizado
          </button>
        </div>
      )}
    </div>
  );
}

