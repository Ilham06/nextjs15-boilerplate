import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React from "react";

export default function SaveButton({ label, loading }) {
  return (
    <LoadingButton
      loading={loading}
      type="submit"
      variant="contained"
      startIcon={<Save />}
      sx={{textTransform: 'capitalize'}}
    >
      {label}
    </LoadingButton>
  );
}
