import { IconButton, Tooltip } from "@mui/material";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function ModalDescTodo({todo}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(todo);
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Tooltip title="مشاهده جزئیات">
        <IconButton onClick={showModal}>
          <FaEye />
        </IconButton>
      </Tooltip>

      <Modal
        title={todo.task}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
         <></>,
        ]}
      >
        <p>{todo.desc}</p>
      </Modal>
    </>
  );
}
