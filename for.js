//loops ---->are some piece of code which you use to repeat the process --->

// Programming is all about executing instructions -->

// if i have to execute some instructions multiple times 
// first option is -- write the instruction multiple times

function sum(a,b){

    var sumofNum=a+b;
    return sumofNum;

}
//sum(2,3);

// loops are designed to solve the problem which can be done repeatively

// for loop    // while loop  // do while Loop

for(var i=1; i<=30; i=i+1){
    // inside the curly brackets you write instructions that you want to repeat multiple times
   // console.log(sum(2,3));
}

function FizzBuzzCorrect(number){
    if (number%5==0 &&  number % 3==0){
        console.log("fizzbuzz");

    }
    else if (number%5==0){
        console.log("buzz");
     }
   else if (number % 3==0){
    console.log("fizz");

} else{
        console.log("Nothing matches");
    }
    



}



for(var i=1;i<=100;i++){

    /// whatever you want to do

  //  FizzBuzzCorrect(i)  // would be executed 100 times from 1 -100

    
}

// arrays with loops --->
var i=9;
var k=90;

// array is a collection fo data .like you can have multiple data in the same variable
var tyArray=[91,82,39,40,58,67,79,90,77];  // array length --> . last index is 8
//console.log(tyArray.length);  // the length of the array gives the total number of elments in the array
/*

console.log(tyArray[0]) //91
console.log(tyArray[1]) // 82
console.log(tyArray[2]) //39 
console.log(tyArray[3]) //40
console.log(tyArray[4])  // 58
console.log(tyArray[5])  // 67
console.log(tyArray[6]) //  79  
*/


// this is how we iterate an array 
/*
function hh(){


for(var i=0;i<tyArray.length;i++){
    console.log(tyArray[i])
}


}

hh();

*/


// for all questions use functions

// Print the double of an array   --  [1,23,44] . --->output -->[2,46,88]
// Print the sqyared of an array --> [2,4,8] -->[4,16,64];

// Print the sum of two arrays   --
// . function(arr1,arr2){ } .   --->sum of array -- [1,2,3] ,[4,5,6] . ---> [5,7,9] ; output 



