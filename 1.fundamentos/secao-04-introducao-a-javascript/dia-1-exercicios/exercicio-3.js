const numberOne = 89;
const numberTwo = 465;
const numberThree = 3333;

if (numberOne > numberTwo && numberOne > numberThree){
    console.log('Esse é o maior número ' + numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log('Esse é o maior número ' + numberTwo);
} else if (numberThree > numberOne && numberThree > numberTwo) {
    console.log('Esse é o maior número ' + numberThree);
}