export const generator = () => {
  let counter = 1;

  return () => counter++;
}

export const generate = generator();
