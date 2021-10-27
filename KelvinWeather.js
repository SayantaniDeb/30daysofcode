//created a var named kelvin
const kelvin=0;
//created a var named celsius converting it from kelvin
const celsius= kelvin-273;
//the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
var fahrenheit= celsius*(9/5)+32;
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//getting the results in newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);



