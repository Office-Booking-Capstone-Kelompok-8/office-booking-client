import { toast } from 'react-toastify';

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
    const textSplit = breadcumbs[breadcumbs.length - 1].split('-');
    const bread = textSplit.join(' ');
    return bread;
  }
  return 'dashboard';
};

export const notifyError = (message) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });
};
