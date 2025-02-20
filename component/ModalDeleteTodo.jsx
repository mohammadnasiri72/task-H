import { IconButton, Tooltip } from "@mui/material";
import { Button, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ModalDeleteTodo({ todo, todos, setTodos, user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const updatedTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(updatedTodos);
      user.todos = updatedTodos;
    
    axios
    .put(`http://localhost:3001/users/${user.id}`, user)
    .then((res) => {
        localStorage.setItem("user", JSON.stringify(user));
        setIsModalOpen(false);
    })
    .catch((err) => {

    });
    // axios
    //   .put(`http://localhost:3001/users/${user.id}`)
    //   .then((res) => {})
    //   .catch((err) => {});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Tooltip title="حذف">
        <IconButton onClick={showModal}>
          <FaRegTrashCan className="text-red-500" />
        </IconButton>
      </Tooltip>
      <Modal
        title="حذف todo"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            انصراف
          </Button>,
          <Button key="submit" type="primary" danger onClick={handleOk}>
            حذف
          </Button>,
        ]}
      >
        <p>آیا از حذف مطمئن هستید؟</p>
      </Modal>
    </>
  );
}
