import { useState } from "react";
import useShowSnackbar from "@/hooks/useShowSnackbar";

export default function useDeleteWithConfirm(deleteMutation, refetch) {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { showSnackbarAfterMutation } = useShowSnackbar();
  
  const handleOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const handleDelete = async () => {
    try {
      const { data, error } = await deleteMutation(selectedId);
      showSnackbarAfterMutation({
        message: "Successfully deleted",
        errorMessage: error?.message,
        code: data?.code,
      });
      if (data?.status) {
        refetch();
        handleClose();
      }
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleDelete,
    selectedId,
  };
}
