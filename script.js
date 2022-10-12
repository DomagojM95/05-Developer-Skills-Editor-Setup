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

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const cureTemp = temps[i];

    if (typeof cureTemp !== "number") continue;

    if (cureTemp > max) max = cureTemp;
    if (cureTemp < min) min = cureTemp;
  }
  console.log(max, min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 23]);
//calcTempAmplitude(temperatures);

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
