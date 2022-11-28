// EXERCISE 1
// que 1
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];
  console.table(countries);
  
  // que 2
  console.log("\n");
  const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  };
  console.table(user);
  
  // que 3
  console.log("\n");
  console.group(countries);
  console.group(user);
  
  //EXERCISE 2
  // que 1
  console.log("\n");
  console.assert(10 > 2 * 10, "answer");
  // que 2
  console.log("\n");
  console.warn("this is a warning");
  
  // que 3
  console.log("\n");
  console.log("this is an error");
  
  // EXERCISE 3
  console.log("\n");
  console.time("Regular for loop");
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1]);
  }
  console.timeEnd("Regular for loop");
  
  console.time("for of loop");
  for (const [name, city] of countries) {
    console.log(name, city);
  }
  console.timeEnd("for of loop");
  
  console.time("forEach loop");
  countries.forEach(([name, city]) => {
    console.log(name, city);
  });
  console.timeEnd("forEach loop");
  
  console.time("while loop");
  let i = 0;
  while (i < countries.length) {
    console.log(countries[i][0], countries[i][1]);
    i++;
  }
  console.timeEnd("while loop");