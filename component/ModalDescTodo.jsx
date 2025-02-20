import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { FaEye } from "react-icons/fa";

export default function ModalDescTodo() {
  return (
   <>
   <Tooltip title="مشاهده جزئیات">
  <IconButton>
  <FaEye />
  </IconButton>
</Tooltip>
   </>
  )
}
