let generateRandomNumber = (num) => {
  let randomNumberArray = [];
  let num = num;

  for (let i = 0; i < num; i++){
    randomNumberArray.push(Math.floor((Math.random() * 1000) +1))
  };
}

export default generateRandomNumber;
