let generateRandomNumber = (num) => {
  let randomNumberArray = [];

  for (let i = 0; i < 1000; i++){
    let num = Math.floor((Math.random() * 1000) +1);
    randomNumberArray.push(num);
}

}

export default generateRandomNumber;
