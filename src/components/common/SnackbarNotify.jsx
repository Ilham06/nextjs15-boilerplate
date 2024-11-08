'use client'

import { closeSnackbar } from "@/store/slice/component/SnackbarSlice";
import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SnackbarNotify() {
  const dispatch = useDispatch();
  const { isOpen, message, variant } = useSelector((state) => state.snackbar);
  const onClose = () => {
    dispatch(closeSnackbar());
  };
  
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert
        onClose={onClose}
        severity={variant}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
