export const splitBreadcumbs = (breadcumbs) => {
  breadcumbs.shift();
  breadcumbs.shift();
  if (breadcumbs.length === 3) {
    breadcumbs.pop();
  }
  if (breadcumbs.length > 0) {
    const textSplit = breadcumbs[breadcumbs.length - 1].split('-');
    return textSplit.join(' ');
  }
  return 'dashboard';
};
