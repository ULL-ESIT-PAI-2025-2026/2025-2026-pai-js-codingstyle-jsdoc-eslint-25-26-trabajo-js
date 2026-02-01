const roundTo = (n, step) => {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};


const exponente1 = (x) => { return x * x; };
const exponente2 = x => x * x;



const cuerno = () => {
  console.log("Toot");
};
