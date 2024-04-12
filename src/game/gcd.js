// eslint-disable-next-line consistent-return
const task = () => {
  const one = Math.floor(Math.random() * 100);
  const two = Math.floor(Math.random() * 100);

  let a = one;
  let b = two;
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;
  return [`${one} ${two}`, answer];
};
export default task;
