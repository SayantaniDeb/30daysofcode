//DOG YEARS CONVERSION
//8 human years = 45 dog years.
/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

-The first two years of a dog’s life count as 10.5 dog years each.
-Each year following equates to 4 dog years.
*/

//a variable named myAge, and set it equal to your age as a number
const myAge= 20;
// a variable named earlyYears and save the value 2 to it.
var earlyYears=2;
earlyYears*=10.5;

var laterYears=myAge-2;
laterYears*=4;
console.log(earlyYears,laterYears);
let myAgeInDogYears=earlyYears + laterYears;

let myName= "Sayantani".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
