import { FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";

export default function FormWithLabel({ children, label }) {
  return (
    <FormControl fullWidth>
      <FormLabel sx={{ mb: 1 }}>{label}</FormLabel>
      {children}
    </FormControl>
  );
}
