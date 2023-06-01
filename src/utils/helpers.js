import { toast } from "react-toastify";
import { intlFormat } from "date-fns";

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

export const dateParse = (date) => {
  const dateFormat = intlFormat(new Date(date), {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return dateFormat;
};
