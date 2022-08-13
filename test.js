/*var myAge = "a day old";
if (myAge == "a day old"){
    document.write("you are a new born!");
}
else if (myAge > 28){
    document.write("you are greater than 28");
} 
else if (myAge > 20){
    document.write("you are greater than 20");
}
else if (myAge > 10){
    document.write("you are greater than 10");
}
else {
    document.write("you are not over 10");
}

logical opeartors
var myAge = 25;
if (myAge <= 18 || myAge >= 30 || myAge === 25) {
    document.write ("you're not invited!");
}
else {
    document.write ("you're invited!");
}

While Loop
var age = 4;
while (age < 10){
    console.log(
        "you're under 5"); age++;
    }
    document.write("you're 10 or over")*/

/*For Loop
for( age = 0; age < 10; age ++) {
    console.log("you're less than 10");
}
document.write("you're 10 or over")*/

// let links = document.getElementsByTagName("a");
// for(i = 1; i <= links.length; i++){
//     alert("This is link number" +i);
// }
// document.write("All links have been looped");

/*break and continue*/

// for (i = 0; i <= 10; i ++){
//     if(i === 2 || i === 5){
//         continue;
//     }
//     console.log(i);

//     if(i === 8){
//         break;
//     }
// }
// console.log("I have broken out of the loop");

// for loop
// let x = 2;
// for(x = 0; x <= 10; x++){
//     console.log("you are within the range.");
// }
// document.write("you have come to the end of this process.")

// let y = 5;
// for(y = 1; y <= 10; y++){
//     console.log("this is the first value of y and it is" +y);
// }
// alert("you have come to the end of this process.")

// let links = document.getElementsByTagName("a");
// for (i = 1; i < links.length; i++){
//     links[i].className = "link_" + i;
// }
// console.log ("This is link_" + i)

// function getAverage(a,b,c,d,e,f){
//     let average = (a + b + c + d + e + f)/6;
//     console.log(average);
//     return average
// }
// let myResult = getAverage(8,12,13,19,21,20,10);
// console.log("This is the average " + myResult);

// function getModulo(x,y,z){
//     let modulo = (x,y,z)%5;
//     console.log(modulo);
//     return modulo

// }
// let remainder = getModulo(25,50,73);
// console.log("This is the remainder: " + remainder);

// sum of numbers in an array:
// const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// console.log(arrayOfNumbers.length)
// for(let i=0; i<arrayOfNumbers.length; i++){
//     sum += arrayOfNumbers[i];
// }
// console.log(sum)
// sumOfNumbers

// count even numbers in an array:
// let count = 0;
// for(i=0; i<arrayOfNumbers.length; i++){
//     if(arrayOfNumbers[i]%2 ===0){
//         count++;
//     }
// }
// console.log(count)


// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum)

// continue & break
// for (i = 0; i<10; i++){
//     if(i === 5||i===3){
//         continue;
//     }
//     console.log(i);
//     if(i===7){
//         break;
//     }
// }
// console.log("I have broken out of the loop")

// slice & split strings
// let str = "hello, world"
// console.log (str)

// let str2 = str.slice(2,9)
// console.log(str2)

// let str3 = str.slice(2)
// console.log(str3)

// let fruitOfSpirit = "love, joy, peace, goodness, gentleness, kindness, faith, meekness, temperance"

// console.log(fruitOfSpirit.length)

// let eachOfFruit = fruitOfSpirit.split(",")
// console.log(eachOfFruit)

// Arrays
// let myData = []
// myData[0] = 08108155256
// myData[1] = "size 6"
// myData[2] = "5.4`"
// myData[3] = 'colour\'s "dark-skinned"'
// console.log(myData)
// console.log(myData[0])

// quick way when the elements of the array are  all known
// taiyeData = [08108155256, "size 6", "5.4`", 'colour\'s "dark-skinned"', "female"]
// console.log(taiyeData)
// console.log(taiyeData[2])
// console.log(taiyeData.length)
// console.log(taiyeData.sort())
// console.log(taiyeData.reverse())

// let myArray = [2022, 11, true, "good morning"]
// console.log(myArray)
// console.log(myArray.sort())

// Objects (property and value pairs)
// let myCar = {} // shorthand method of declaring objects:
// myCar = {
//     carType: "Range", 
//     maxSpeed: 50, 
//     colour: "maroon", 
//     driver:"Taiye", 
//     drive: function(speed, time){
//         console.log("distance travelled is " + speed*time);
//     },
//     logDriver: function(){
//         console.log("driver name is " + this.driver)
//     }
// }
// console.log(myCar)
// console.log(myCar.maxSpeed)
// myCar.drive(50, 4)
// myCar.logDriver()

// Constructor function: creating multiple variants of a particular object
class Car {
    constructor(carType, maxSpeed, colour, driver) {
        this.carType = carType;
        this.maxSpeed = maxSpeed;
        this.colour = colour;
        this.driver = driver;
        this.drive = function (speed, time) {
            console.log("distance travelled is " + speed * time);
        };
        this.logDriver = function () {
            console.log("driver name is " + this.driver);
        };
    }
}

let myCar1 = new Car("Mercedez", 60, "black", "Kennie")
let myCar2 = new Car("Lexus", 70, "silver", "Rony")
let myCar3 = new Car("Porsche", 100, "blue", "BKM")
let myCar4 = new Car("Range", 80, "Maroon", "Taiye")

myCar1.drive(45, 4)
myCar3.logDriver()

// Date object
let myDate = new Date()
console.log(myDate)
