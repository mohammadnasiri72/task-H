import DoneTodo from "@/component/DoneTodo";
import ModalDeleteTodo from "@/component/ModalDeleteTodo";
import ModalDescTodo from "@/component/ModalDescTodo";
import TabTodo from "@/component/TabTodo";
import { IconButton, Tooltip } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

export default function todoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [user, setUser] = useState({});
  const [desc, setDesc] = useState("");
  const [valTab, setValTab] = useState(0);


  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setUser(user);
      setTodos(user.todos);
    }
  }, []);

  const addtodo = () => {
    const newTask = {
      id: Date.now(),
      task: newTodo,
      completed: false,
      desc: desc,
    };
    const updatedTodos = [...todos, newTask];
    setTodos([...todos, newTask]);
    user.todos = updatedTodos;
    axios
      .put(`http://localhost:3001/users/${user.id}`, user)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(user));
        setNewTodo("");
        setDesc("");
      })
      .catch((err) => {});
  };
  

  return (
    <>
      <div className="bg-sky-200 p-5 min-w-full">
        <h1 className="text-center text-3xl md:py-12 py-6"> ثبت نام</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
          <div className="bg-white md:px-16 shadow-md rounded-md">
            <h2 className="text-2xl md:my-6 flex items-center">
              <i className="fa fa-thumb-tack px-3" aria-hidden="true"></i>
              ثبت تسک جدید
            </h2>
            <input
              type="text"
              className="w-full mb-4 rounded-md py-2 px-4 border border-orange-600 focus:outline-none focus:border-2 focus:bg-orange-100"
              placeholder="تسک را وارد کنید"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <input
              type="text"
              className="w-full mb-4 rounded-md py-2 px-4 border border-orange-600 focus:outline-none focus:border-2 focus:bg-orange-100"
              placeholder="جزئیات تسک را وارد کنید"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <button
              onClick={addtodo}
              className="py-2 px-4 bg-slate-600 text-white w-full rounded-md"
            >
              وارد کردن
            </button>
          </div>
          <div className="bg-white md:px-16 shadow-md rounded-md">
            <TabTodo setValTab={setValTab}/>
            <h2 className="text-2xl md:my-6">
              <i class="fa fa-list px-3" aria-hidden="true"></i>
              لیست تسک های من
            </h2>
            <ul>
              {todos
              .filter((e)=> valTab===0 ? e : valTab===1 ?  e.completed : !e.completed)
              .map((todo, i) => (
                <li
                  key={i}
                  className={
                    todo.completed
                      ? "w-full mb-4 rounded-md py-2 px-4 bg-emerald-600 flex items-center justify-between"
                      : "w-full mb-4 rounded-md py-2 px-4 bg-slate-100 flex items-center justify-between"
                  }
                >
                  {todo.task}
                  <div>
                    {/* <i
                      className="fa fa-check cursor-pointer text-green-600"
                      aria-hidden="true"
                    ></i> */}

                    {/* <Link className="mx-2" href="/">
                      <i
                        className="fa fa-info-circle text-blue-600"
                        aria-hidden="true"
                      ></i>
                    </Link> */}

                    {/* <i
                      className="fa fa-trash cursor-pointer text-red-600"
                      aria-hidden="true"
                    ></i> */}

                    <DoneTodo
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                      user={user}
                    />
                    <ModalDescTodo todo={todo}/>
                    <ModalDeleteTodo
                      todo={todo}
                      todos={todos}
                      setTodos={setTodos}
                      user={user}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
