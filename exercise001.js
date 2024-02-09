const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Your solution(s) to exercise001 here!
console.log(`\n`);
promise
  .then((value) => {
    console.log(`\n`);
    console.log(`Task1: Yay! Promise resolved with response: ${value}`);
  })
  .catch((error) => {
    console.log(`\n`);
    console.log(`Task1: Boo. Promise rejected with response: ${error}`);
  });

const promiseResponse = async () => {
  try {
    const response = await promise();
    console.log(`Task2: Yay! Promise resolved with response: ${response}`);
  } catch (err) {
    console.error(`Task2: Boo. Promise rejected with response: ${err}`);
  }
};
promiseResponse();
