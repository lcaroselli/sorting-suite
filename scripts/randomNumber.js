function generateRandomNumber(num) {
  let numberArray = [];

  for (let i = 0; i < num; i++) {
    let randomNumber = (Math.floor(Math.random() * 100) -1);

    numberArray.push(randomNumber);
  }
  return numberArray;
}

export default generateRandomNumber;
