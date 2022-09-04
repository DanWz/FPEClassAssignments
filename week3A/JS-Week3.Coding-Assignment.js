console.log('JS-Week3.Coding-Assignment.js');

//// ages array Question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);

ages.push(103);
console.log(ages[ages.length - 1] - ages[ages.length - ages.length]);

let averageAges = 0;
for (let i = 0; i < ages.length; i++){
    averageAges += ages[i];
}
console.log(averageAges / ages.length);

/// names Array question 2:
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameCount = 0;
for(element in names){
    nameCount += names[element].length;
}
console.log(nameCount / names.length);

let nameString = '';
for (element in names){
    nameString += names[element] + " ";
}
console.log(nameString.trim(nameString));

//Question 3: Array[array.length – 1];
//Question 4: Array[0];
//Question 5:
let nameLengths = [];
for(element in names){
    nameLengths.push(names[element].length);
}
console.log(nameLengths);

//Question 6:
let nameLengthsSum = 0;
for(element in nameLengths){
    nameLengthsSum += nameLengths[element];
}
console.log(nameLengthsSum);

//Question 7:
function selfConcatination (word, n){
    let ourWord = word;
    for (i=1;i<n;i++){
        ourWord += word;
    }
    return ourWord;
}
console.log(selfConcatination("level", 3));

//Question 8:
function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(fullName ('billy', 'billson'));

//Question 9:
function sum100 (numberArray) {
    let numberArrayAccumulator = 0;
    for (element in numberArray){
        numberArrayAccumulator += numberArray[element];
    }
 //   console.log('the sum of numbers in the array are equal to: ' + numberArrayAccumulator);
    if (numberArrayAccumulator >= 100){
//        console.log('this is greater than 100');
        return true;
    } else {
//        console.log('this is less than 100');
        return false;
    }
}
let myNumberArray = [5,10,15,3];
let myNumberArray2 = [5,10,15,300];
console.log(sum100(myNumberArray));
console.log(sum100(myNumberArray2));

//Question 10:
function averageArray (numberArray){
    let numberArrayAverage = 0;
    for (element in numberArray){
        numberArrayAverage += numberArray[element];
    }
    return numberArrayAverage / (numberArray.length);
}
console.log(averageArray(myNumberArray));
console.log(averageArray(myNumberArray2));

//Question 11:
function averageArrayComparison(numberArray1, numberArray2){
    let numberArrayAverage1 = 0;
    let numberArrayAverage2 = 0;

    for (element in numberArray1){
        numberArrayAverage1 += numberArray1[element];
    }
    for (element in numberArray2){
        numberArrayAverage2 += numberArray2[element];
    }
    if (numberArrayAverage1 > numberArrayAverage2){
        return true;
    } else {
        return false;
}
}
console.log(averageArrayComparison(myNumberArray, myNumberArray2)); //false
console.log(averageArrayComparison(myNumberArray2, myNumberArray)); //true

//Question 12:
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){
        return true;
    } else {
        return false;
    }
}

console.log('will we buy a drink?');
console.log(willBuyDrink(false, 100)); //false
console.log(willBuyDrink(true, 100)); //true
console.log(willBuyDrink(true, 10)); //false

//Question 13:
// a function called isItTimeToWaterTomatoes that accepts boolean values haveTheyBeenWateredAlready, isTheSoilStillWet, and a number howHotIsIt.
function isItTimeToWaterTomatoes(haveTheyBeenWateredAlready, isTheSoilStillWet, howHotIsIt){
    if(haveTheyBeenWateredAlready === true){
        return console.log('no they are already watered.')
        //if the tomatoes have been watered there is no need to water them.
    } else if (isTheSoilStillWet === true && howHotIsIt <= 80){
        return console.log('not yet. but it will be time tomorrow morning');
        //if the soil is still wet and it is cooler than 80 they can wait to be watered until tomorrow.
    } else {
        return console.log('better water them.');
        //if it is too hot or the soil is dry it's best to water them.

    }
    }
console.log('is it time to water my tomatoes?');
let todayTemp = 85;
let alreadywatered = true;
let stillWet = true;
isItTimeToWaterTomatoes(alreadywatered, stillWet, todayTemp);
