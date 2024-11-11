import { store } from "@/store";
import { showSnackbar } from "@/store/slice/component/SnackbarSlice";

const useShowSnackbar = () => {

   const dispatchSnackbar = (message, variant) => {
      store.dispatch(
         showSnackbar({
            isOpen: true,
            message,
            variant,
         })
      );
   };

   const showSnackbarAfterMutation = ({ code, message, errorMessage }) => {
      if ([200, 201].includes(code)) {
         dispatchSnackbar(message || "Operation successful", "success");
      } else {
         dispatchSnackbar(errorMessage || "An error occurred", "error");
      }
   };

   const showSuccessSnackbar = (message) => {
      dispatchSnackbar(message, "success");
   };

   const showFailedSnackbar = (message) => {
      dispatchSnackbar(message, "error");
   };

   return { showSnackbarAfterMutation, showFailedSnackbar, showSuccessSnackbar };
};

export default useShowSnackbar;
