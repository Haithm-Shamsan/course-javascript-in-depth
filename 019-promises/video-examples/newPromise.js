const MyP = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello After 2 secondes");
  }, 2000);
  // resolve("dis is if da promise resolved");
  reject("dis is rejection message");
});

MyP.then((resolvemessage) => {
  console.log("this is after resolve the promise");
  console.log(resolvemessage);
}).catch((rejectdamessage) => {
  console.log("this is after reject the promise");
  console.log(rejectdamessage);
});
console.log("Promise Panding..");
