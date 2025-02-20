import { IconButton, Tooltip } from "@mui/material";
import axios from "axios";
import React from "react";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function DoneTodo({ todo, todos, setTodos, user }) {

  const handleOk = () => {
    const updatedTodos = todos.map((t) =>
      todo.id === t.id ? { ...t, completed: true } : t
    );
    setTodos(updatedTodos);
    user.todos = updatedTodos;
    localStorage.setItem("currentUser", JSON.stringify(user));

    axios
      .put(`http://localhost:3001/users/${user.id}`, user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(user));
        setIsModalOpen(false);
      })
      .catch((err) => {});
  };

  const handleCancel = () => {
    const updatedTodos = todos.map((t) =>
      todo.id === t.id ? { ...t, completed: false } : t
    );
    setTodos(updatedTodos);
    user.todos = updatedTodos;
    localStorage.setItem("currentUser", JSON.stringify(user));

    axios
      .put(`http://localhost:3001/users/${user.id}`, user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(user));
        setIsModalOpen(false);
      })
      .catch((err) => {});
  };
  return (
    <>
    {
        !todo.completed &&
      <Tooltip title="انجام">
        <IconButton onClick={handleOk}>
          <IoCheckmarkDoneCircle className="text-emerald-500" />
        </IconButton>
      </Tooltip>
    }
    {
        todo.completed &&
      <Tooltip title="کنسل">
        <IconButton onClick={handleCancel}>
          <MdCancel className="text-red-500" />
        </IconButton>
      </Tooltip>
    }
    </>
  );
}
