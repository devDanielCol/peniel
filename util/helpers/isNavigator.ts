const isNavigator = (): boolean => {
  if (typeof window !== "undefined") {
    return true;
  }
  return false;
};
export default isNavigator;
