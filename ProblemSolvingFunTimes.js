

//write a program that prints

function leapYear(){
    let leapYearStart = 2016;
    let leapYears = [];
    let currentYear = new Date().getFullYear();
    for(let i = 0; i < 1000; i++){
        leapYearStart+=4;
        leapYears.push(leapYearStart);
    }
    for(let i = 0; i< leapYears.length; i++){
        if(currentYear < leapYears[i]){
            for(let i = 0; i<20;i++){
                console.log(leapYears[i]);
            }
            break;
        }
    }



    
    console.log(currentYear);
}
leapYear();
// function happyNumbers(){
//     let input = prompt("Please enter a number to check");
//     let prevValue = [];
//     let happyBool = true;
//     let sum = 0;
//     while(sum != 1 && happyBool){
//         sum = 0;
//         let splitNumber = input.split("");
//         for(let i = 0; i< splitNumber.length; i++)
//         {
//             sum += splitNumber[i] * splitNumber[i];
//         }
//         for(let i = 0; i< prevValue.length; i++){
//             if(prevValue[i] == sum)
//             {
//                 console.log("not a happy number");
//                 happyBool = false;
//                 break;
//             }
//         }
//         prevValue.push(sum);
//         input = sum.toString();
//     }
//     if(happyBool){
//         console.log("We found a happy number!");
//     }
// }
// happyNumbers();