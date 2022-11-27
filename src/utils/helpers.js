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
