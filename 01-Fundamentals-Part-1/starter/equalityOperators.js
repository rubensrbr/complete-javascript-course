const age = 18;

// We always should use "==="
if (age === 18) {
  console.log("Eighteen then")
}

// The "==" does type coercion

if (String(age) == 18) {
  console.log("Type coercion right here!!!")
}

//Different operator

if (String(age) !== 18) {
  console.log("Now we don't have type coercion");
}

if (String(age) != 18) {
  console.log("This block will not run!!!")
} else {
  console.log("Now we have type coercion")
}
