import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded } from "./todosSlice";

function CreateTodo() {
  const [text, setText] =useState("")
  const dispatch = useDispatch();
  const state = useSelector(state=>state);

  console.log(state);

  function handleSubmit(e){
    e.preventDefault();
    dispatch(todoAdded(text));
    setText("");
  }

  return <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
        </p>
        <input type="submit" />
      </form>
    </div>;
}

export default CreateTodo;
