let userName='';
userName ? console.log(`Hello ${userName}`): console.log("hello!");
let userQuestion='do you love me?';
console.log(`The user asked: ${userQuestion}`);

const randomNumber =Math.floor(Math.random()*8);
let eightBall="";
switch (randomNumber){
  case 0:
  eightBall='It is certain';
  break;
   case 1:
  eightBall='It is decidedly so';
  break;
  case 2:
  eightBall='i love you';
  break;
  case 3:
  eightBall='everything will be alright';
  break;
  case 4:
  eightBall='i thought so';
  break;
  case 5:
  eightBall='things are so different now';
  break;
  case 6:
  eightBall="i am scared";
  break;
  case 7:
  eightBall='It is decidedly so';
  break;
  case 8:
  eightBall='maybe someday';
  break;

  
}
console.log(`The eight ball answered: ${eightBall}`); 
