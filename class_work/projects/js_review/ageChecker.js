function ageChecker(age) {
  const drivingAge = 16;
  const drinkingAge = 21;
  const affordableRentalAge = 25;

  if (age >= affordableRentalAge) {
    console.log("You can rent a car affordably.");
  } else if (age >= drinkingAge) {
    console.log("You are old enough to drink.");
  } else if (age >= drivingAge) {
    console.log("You are old enough to drive.");
  } else {
    console.log("You are too young for all of the above.");
  }
}

// Example usage:
let age = 23;
ageChecker(age);