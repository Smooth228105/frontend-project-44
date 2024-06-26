const task = () => {
  const one = Math.floor(Math.random() * 10);
  const two = Math.floor(Math.random() * 10);

  const operators = ['+', '*', '-'];
  const index = Math.floor(Math.random() * 3);
  let answer = '';

  // eslint-disable-next-line default-case
  switch (index) {
    case 0:
      answer = `${one + two}`;
      break;
    case 1:
      answer = `${one * two}`;
      break;
    default:
      answer = `${one - two}`;
      break;
  }

  return [`${one} ${operators[index]} ${two}`, answer];
};
export default task;
