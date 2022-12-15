import { toast } from "react-toastify";

export const splitBreadcumbs = (breadcumbs) => {
  breadcumbs.shift();
  breadcumbs.shift();
  if (
    breadcumbs.length === 3 ||
    Number(breadcumbs[breadcumbs.length - 1]) * 1
  ) {
    breadcumbs.pop();
  }

  if (breadcumbs.length > 0) {
    const textSplit = breadcumbs[breadcumbs.length - 1].split("-");
    const bread = textSplit.join(" ");
    return bread;
  }
  return "dashboard";
};

export const notifyError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
};

export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
};

const checkReservationColor = (id) => {
  if (id === 1) return "bg-warning";
  if (id === 2) return "bg-warning";
  if (id === 3) return "bg-warning";
};
