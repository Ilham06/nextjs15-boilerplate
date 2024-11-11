import { Save } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export default function SaveButton({ label, loading }) {
  return (
    <LoadingButton
      loading={loading}
      type="submit"
      variant="main"
      startIcon={<Save />}
    >
      {label}
    </LoadingButton>
  );
}
