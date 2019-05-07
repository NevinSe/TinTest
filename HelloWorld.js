
let hoursWork = prompt("How many hours");
let payRate = prompt("please enter pay rate");
let overTimeMultiply = 1.5;
let regHours = 30;
let totalPay;


if(hoursWork > regHours)
{
    let overTimeHours = hoursWork - regHours;
    let overTimePay = payRate * overTimeMultiply;
    let totalOverTimePay = overTimeHours * overTimePay;
    let regPay = regHours * payRate;
    totalPay = totalOverTimePay + regPay;
}
else{
    totalPay = hoursWork * payRate;
}

console.log(totalPay);