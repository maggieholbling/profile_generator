const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What... is your name?\n", (answer1) => {

  rl.question("What... is your quest?\nTo ", (answer2) => {
  
    rl.question("What... is your favorite color?\n", (answer3) => {
      console.log(`${answer1} is seeking to ${answer2} and their favorite color is ${answer3.toLowerCase()}.`);
      
      rl.close();
    });
  });
});