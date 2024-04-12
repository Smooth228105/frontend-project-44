/// const nameUser = greeting();
const task = () => {
  const numbers = Math.floor(Math.random() * 100);
  if (numbers % 2 === 0) {
    return [numbers, 'yes'];
  }
  return [numbers, 'no'];
};
export default task;
