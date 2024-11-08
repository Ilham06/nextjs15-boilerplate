"use client";

import { showSnackbar } from "@/store/slice/component/SnackbarSlice";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

export default function page() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      showSnackbar({
        isOpen: true,
        variant: "success",
        message: "Hello world, this is snackbar",
      })
    );
  };
  return <Typography>Home Page</Typography>;
}
