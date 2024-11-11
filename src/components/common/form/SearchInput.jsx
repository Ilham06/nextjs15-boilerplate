"use client";

import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput({
  onChange,
  onKeyPress,
  placeholder,
  width,
  size,
  helperText,
}) {
  return (
    <TextField
      onKeyPress={onKeyPress}
      onChange={onChange}
      placeholder={placeholder ? placeholder : "Search"}
      type="search"
      helperText={helperText}
      sx={{ width: width, outline: 0, border: "none" }}
      size={size}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
