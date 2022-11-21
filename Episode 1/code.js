/* eslint-disable require-jsdoc */

class Lock {
  constructor() {
    value = this.value;
  }
}

// I would decrease the number of lock positions to 10
// I would change the colors to true and false
Lock1 = new Lock('false');

Lock2 = new Lock('false');

Lock3 = new Lock('false');

Lock4 = new Lock('false');

Lock5 = new Lock('false');

Lock6 = new Lock('false');

Lock7 = new Lock('false');

Lock8 = new Lock('false');

Lock9 = new Lock('false');

Lock10 = new Lock('true');

function breakLock() {
  // Check if Lockn.value is true
  // I had no alternative ways to shorten these code
  if (Lock1.value == 'true') {
    return console.log('Lock1 is true');
  } else if (Lock2.value =='true') {
    return console.log('Lock2 is true');
  } else if (Lock3.value == 'true') {
    return console.log('Lock3 is true');
  } else if (Lock4.value == 'true') {
    return console.log('Lock4 is true');
  } else if (Lock5.value == 'true') {
    return console.log('Lock5 is true');
  } else if (Lock6.value == 'true') {
    return console.log('Lock6 is true');
  } else if (Lock7.value == 'true') {
    return console.log('Lock7 is true');
  } else if (Lock8.value == 'true') {
    return console.log('Lock8 is true');
  } else if (Lock9.value == 'true') {
    return console.log('Lock9 is true');
  } else if (Lock10.value == 'true') {
    return console.log('Lock10 is true');
  }
}

// Call the function
breakLock();
// You can change the value of Lock10 to false and Lockn to true
