// Type coversion

const input = "1991";

// We can "convert" like this:
console.log(Number(input) + 18)


// If we try to convert a name, for instance, in a Number
// we will endup with a "Nan"
console.log(Number("Cuca Beludo"))

// A "Nan" actually is a invalid number, but still a Number
console.log(typeof NaN)


// Type Coercion
console.log(`I'am ${23} years old`)

console.log('23' - '10' - 3);
