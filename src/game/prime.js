const task = () => {
  const numbers = Math.floor(Math.random() * 100);

  if (numbers % 2 && numbers % 3 && numbers % 4 && numbers % 5 && numbers % 7) {
    return [numbers, 'yes'];
  }
  return [numbers, 'no'];
};
export default task;
