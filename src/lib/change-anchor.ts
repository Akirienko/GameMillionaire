const changeAnchor = (anchor: string, classes: any) => {
  switch (anchor) {
    case 'left':
      return classes.left;
    case 'right':
      return classes.right;
    default:
      return classes.left;
  }
};

export default changeAnchor;
