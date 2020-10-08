const mq = (n) => {
  const bpArray = Object.keys(bp).map((key) => [key, bp[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

const bp = {
  medium: 1050,
};

export { mq, bp };
