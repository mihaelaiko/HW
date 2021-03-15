/* -------------------------------------------------------------------------- */
/*                            task: generateRandomNumber                      */
/* -------------------------------------------------------------------------- */
// Да се дефинира функцията generateRandomNumber(start, end), която генерира
// цяло случайно число в интервала, зададен чрез параметрите start и end.
// Hint: използвайте Math.random() функцията за генериране на случайно число.

// примерно извикване:
// let randomNumber = generateRandomNumber(1,100);
// console.log( randomNumber );
// randomNumber трябва да е цяло число, като 1 >= randomNumber <=100

function generateRandomNumber(start, end){
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end - start+ 1) + start);
  
  }
  
  let randomNumber = generateRandomNumber(1,100);
  console.log( randomNumber );
  