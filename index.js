const greeting = prompt("What is your name?")

console.log("Hallo " + greeting)

const year = prompt("What is your year of birth")

const age = new Date().getFullYear(2024) - year

console.log(greeting + " your age is " + age + " years old!")