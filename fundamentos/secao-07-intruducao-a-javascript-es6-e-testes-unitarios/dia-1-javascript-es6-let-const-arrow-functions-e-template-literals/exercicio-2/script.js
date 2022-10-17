const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  let lowestToHighest = oddsAndEvens.sort((a, b) => a - b);
  console.log(lowestToHighest);
}
sortOddsAndEvens();