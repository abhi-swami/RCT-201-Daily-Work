const expensiveOperation = (time) => {
  const start = Date.now();
  while (Date.now() - start <time) {
    continue;
  }
  return true;
};

export default expensiveOperation;
