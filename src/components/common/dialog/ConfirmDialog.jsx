"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";


export default function ConfirmDialog({
  open,
  handleClose,
  description,
  loading,
  action,
}) {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose} maxWidth={"xs"} fullWidth>
        <DialogContent>
          <Typography color="text.secondary">{description}</Typography>

          <Box display={"flex"} gap={2} mt={4} justifyContent={"end"}>
            <Button
              variant="secondary"
              sx={{ border: 1, borderColor: "#919EAB52" }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <LoadingButton
              loading={loading}
              variant="contained"
              onClick={action}
            >
              Yes, Confirm
            </LoadingButton>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
