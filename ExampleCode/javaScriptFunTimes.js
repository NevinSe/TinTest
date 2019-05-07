

// let payRate;
// let hoursWorked;
// let regWorkWeek = 30;
// let payModifier = 1.5;
// let overTimePay;
// let overTimeHours;
// let regularPay;
// let totalOverTimePay;
// let totalPay;

// payRate = prompt("What is your pay rate?!");
// hoursWorked = prompt("how many hours worked?!");

// if(hoursWorked > regWorkWeek){
//     overTimeHours = hoursWorked - regWorkWeek;
//     overTimePay = payRate * payModifier;
//     totalOverTimePay = overTimeHours * overTimePay;
//     regularPay = payRate * regWorkWeek;
//     totalPay = totalOverTimePay + regularPay;
// }
// else{
//     totalPay = hoursWorked *payRate;
// }

// console.log(totalPay);


// for(let i = 1; i <= 100; i++){

//     if(i%3 == 0 && i%5 == 0){
//         console.log("fizzbuzz");
//     }
//     else if(i%3 == 0){
//         console.log("fizz");
//     }
//     else if(i%5 == 0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// function runPayCalc(){
//     let payMulti = 1.5;
//     let regHours = 40;
//     let hours = getHoursWork();
//     let pay = getPayRate();
//     let totalPay;

//     if(hours > regHours){
//         let overTimeHours = getOverTimeHours(hours, regHours);
//         let overTimePayRate = getOverTimePay(pay, payMulti);
//         let overTimePay = calcTotalPay(overTimePayRate, overTimeHours);
//         let regularPay = calcTotalPay(pay, regHours);
//         totalPay = calcTotalPayForOvertime(overTimePay, regularPay);
//     }
//     else{
//         totalPay = calcTotalPay(hours, pay);
//     }
//     console.log(totalPay);
// }

// // function runPayCalc(){
// //         let payMulti = 1.5;
// //         let regHours = 40;
// //         let hours = getHoursWork();
// //         let pay = getPayRate();
// //         let totalPay;
    
// //         if(hours > regHours){
// //             totalPay = calcTotalPayForOvertime(calcTotalPay(getOverTimePay(pay, payMulti),  getOverTimeHours(hours, regHours)), calcTotalPay(pay, regHours));
// //         }
// //         else{
// //             totalPay = calcTotalPay(hours, pay);
// //         }
// //         console.log(totalPay);

// // }
// function getHoursWork(){
//     let hours = prompt("Enter Hours Worked");
//     return hours;
// }
// function getPayRate(){
//     let pay = prompt("Enter pay rate");
//     return pay;
// }

// function getOverTimeHours(hoursWorked, regHours){
//     let overTimeHours = hoursWorked - regHours;
//     return overTimeHours;
// }
// function getOverTimePay(regPay, overTimeMultiplier){
//     let overtimePay = regPay*overTimeMultiplier;
//     return overtimePay;
// }

// function calcTotalPay(pay, hours){
//     let totalPay = pay*hours;
//     return totalPay;
// }
// function calcTotalPayForOvertime(totalRegPay, overTimePay){
//     let totalPayCalc = totalRegPay + overTimePay;
//     return totalPayCalc;
// }
// runPayCalc();


// function capitalizeLetter(input){
//     let wordArray = input.split(" ");
//     let finalString = "";
//     for(let i = 0; i< wordArray.length; i++){
//         finalString += wordArray[i].charAt(0).toUpperCase() + 
//         wordArray[i].slice(1).
//         toLowerCase() + " ";
//     }
//     console.log(finalString.trim());
// }

// let input = prompt("Enter a word");

// capitalizeLetter(input);
// function happyNumbers(input, previousSums = []){
//     let splitNumber = input.split("");
//     let sum = 0;
//     for(let i = 0; i< splitNumber.length; i++){
//         sum += splitNumber[i] * splitNumber[i];
//     }
//     if(sum == 1){
//         console.log("You found a happy number!");
//     }
//     else{
//         for(let i = 0; i < previousSums.length; i++){
//             if(sum == previousSums[i]){
//                 return console.log("Not a happy number");
//             }
//         }
//         previousSums.push(sum);
//         happyNumbers(sum.toString(), previousSums);
//     }
// }

// let input = prompt("Enter a number");

// happyNumbers(input);



function compressString(input){
    let finalString = "";
    let counter = 1;
    for(let i = 0; i < input.length; i++){
        if(input.charAt(i) == input.charAt(i+1)){
            counter++;
        }else{
            finalString += counter + input.charAt(i);
            counter = 1;
        }
    }
    console.log(finalString);
}
let input = prompt("Enter a number");

compressString(input);