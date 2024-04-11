// import moment package
const moment = require('moment');

// Display the current date
const currentDate = moment().format('dddd, MMMM Do YYYY');
console.log(currentDate);

// Compute the number of years since November 26th, 1976
const startDate = moment('1976-11-26');
const yearsSince1976 = moment().diff(startDate, 'years');
console.log(yearsSince1976, 'years ago');