console.log('Start');

const myPromise = new Promise((resolve) => {
  console.log('Inside Promise Constructor');
  resolve('Promise Resolved');
});

myPromise.then((message) => {
  console.log(message);
});

setTimeout(() => {
  console.log('Inside setTimeout');
  const timeoutPromise = new Promise((resolve) => {
    console.log('Inside Promise in setTimeout');
    resolve('Timeout Promise Resolved');
  });

  timeoutPromise.then((message) => {
    console.log(message);
  });
}, 0);

console.log('End');

// Start
// Inside Promise Constructor
// End
// Promise Resolved
// Inside setTimeout
// Inside Promise in setTimeout
// Timeout Promise Resolved
