const mq = (n) => {
  const bpInPXArray = Object.keys(bpInPX).map((key) => [key, bpInPX[key]]);

  const [result] = bpInPXArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size / 16}em)`];
    return acc;
  }, []);

  return result;
};

const bpInPX = {
  small: 550,
  medium: 1050,
};

export { mq };
