import { toast } from "react-hot-toast";

export const showErrorToast = (errorMessage) => {
  toast.error(errorMessage);
};

export const showSuccessToast = (successMessage) => {
  toast.success(successMessage, {
    duration: 2000,
    icon: "🚀",
  });
};

export const showInfoToast = (infoMessage) => {
  toast.success(infoMessage, {
    duration: 4000,
    icon: "ℹ️",
  });
};
