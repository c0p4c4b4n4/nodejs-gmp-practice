console.log('Start');

setTimeout(() => {
  console.log('Timeout with 0ms');
}, 0);

setImmediate(() => {
  console.log('Immediate');
});

console.log('End');
