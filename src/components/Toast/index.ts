import { toast } from "react-toastify";

export const ErrToast = (message: string) => {
  return toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const SuccessToast = (message: string) => {
  return toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
