// Circumference function
const circumference = (radius) => {
  return 2 * Math.PI * radius;
}

// Area Function
const area = (radius) => {
  return Math.PI * radius ** 2;
}

// Module exports
module.exports = {
  circumference, area,
};