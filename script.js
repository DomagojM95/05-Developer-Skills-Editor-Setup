// Remember, we're gonna use strict mode in all scripts now!

/*
"use strict";

const x = 23;

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1890));

*/

//////////////////////////////////////////////////////////////////////  using  googel, stackowerflow and MDN /////////////////////////

// PROBLEM
// we work for a company building a smart home thermometar, our most recent task is this: given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1 understanding the problem
// what is temš amplitude? answer: doffertence betweene highest and lowest temp
// how to compute max and min temperatures?
//whats sensor errors? and what to do?

// 2 breaking up into sub problems
// how to ignore errors?
// find max value in temp array
// find min value in temp array
