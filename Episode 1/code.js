/* eslint-disable require-jsdoc */

class Lock {
  value = this.value;
}

// I would decrease the number of lock positions to 10
// I would change the colors to true and false
Lock1 = new Lock();
Lock1.value = 'false';

Lock2 = new Lock();
Lock2.value = 'false';

Lock3 = new Lock();
Lock3.value = 'false';

Lock4 = new Lock();
Lock4.value = 'false';

Lock5 = new Lock();
Lock5.value = 'false';

Lock6 = new Lock();
Lock6.value = 'false';

Lock7 = new Lock();
Lock7.value = 'false';

Lock8 = new Lock();
Lock8.value = 'false';

Lock9 = new Lock();
Lock9.value = 'false';

Lock10 = new Lock();
Lock10.value = 'true';

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
