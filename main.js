
function changeLast(arr, num) {
  arr[arr.length - 1] = num;
}



function addMeToEnd(arr) {
arr.push('Colin');

}

function addMeToStart(arr) {
arr.unshift('Colin');
}

function changeAllValuesTo(arr,num) {
let i = 0;
while (i < arr.length) {
  arr[i] = num;
}
i ++;
}

function oddOrEven(arr) {
let i = 0;
while (i < arr.length)
if (arr[i] % 2 === 0){
  arr[i] = 'even';
} 
else {
  arr[i] = 'odd'{
  arr[i] = num;
}
i ++;
}

function changeNextThreeToValue(start1, arr, value) {
  let i = start1;
  let count = 0
  while (i < arr.length && count <= 2) {
    arr[i] = value;
    count ++;
  }
  i ++;
}
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}