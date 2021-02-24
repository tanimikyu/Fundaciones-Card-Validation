//split, toma un texto y lo transforma en un arreglo
//revertNumber, toma una cadena de texto y nos la devuelve como un arreglo 
//map, toma hasta 3 paramétros, + obliga a que el valor sea siempre un número (similar a parseInt)

const revertNumber = (cardNumber) => {
  let newArray = cardNumber.split("");
  return newArray.reverse().map(x => +x);
}

//algoritmo de Luhn 

const luhn = (cardNumberArray) => {
  let sizeArray = cardNumberArray.length - 1;
  let double = [];
  for (let i = 0; i <= sizeArray; i++) {
    if (i % 2 == 0) {
      double.push(cardNumberArray[i]);
    }
    else {
      let doubleNumber = cardNumberArray[i] * 2;
      if (doubleNumber >= 10) {
        let ten = (doubleNumber / 10);
        ten = parseInt(ten, 10);
        let rest = doubleNumber % 10;
        doubleNumber = ten + rest;
      }
      double.push(doubleNumber);
    }
  }
  let sum = 0;
  for (let i = 0; i <= sizeArray; i++) {
    sum += double[i];
  }
  return sum;
}

const isValid = (cardNumber) => {
  let revertedNumber = revertNumber(cardNumber);
  let luhnResult = luhn(revertedNumber);
  let cardStatus = false;
  if ((luhnResult != 0) && (luhnResult % 10 == 0)) {
    cardStatus = true;
  }
  return cardStatus;
}

//Maskify = método que oculta los números a excepción de los últimos cuatro

const maskify = (cardNumber) => {

//long es el largo de cardNumber - 4 posiciones
  let long = cardNumber.length - 4;
  //últimos 4 carácteres 
  let lastFour = cardNumber.substring(cardNumber.length - 4)
  let result = "";
  //for recorre el arreglo exceptuando las últimas 4 posiciones
  for (let mask = 1; mask <= long; mask++) {
  //se suman los números finales + los que están ocultos 
    result += "#";
  }

//Sumo a mi arreglo final los Strings

  return result + lastFour;
}

export default { isValid, maskify };