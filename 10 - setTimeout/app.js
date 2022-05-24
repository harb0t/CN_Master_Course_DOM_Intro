setTimeout(
    (message) => {
    console.log('message');
},
 5000, 
 "Hi user!"
);

// I don't understand what this does?

// Answer: It measures 5 seconds into page loading then displays "Hi user!"

// Additional notes:
// Times are calculated in milliseconds. 1,000ms = 1s



// Tracy's code:

// setTimeout(
//     (message) => {
//       console.log(message);
//     },
//     5000,
//     "Hi user!"
//   );