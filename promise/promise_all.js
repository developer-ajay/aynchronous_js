const p1 = new Promise(resolve => setTimeout(() => resolve("Success 1"), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Error Occurred"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Success 3"), 3000));

Promise.all([p1, p3])
  .then(values => console.log(values))
  .catch(error => console.error("Error:", error)); 
