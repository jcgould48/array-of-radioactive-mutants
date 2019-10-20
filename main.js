
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

function oddOrEven() {

}

function changeNextThreeToValue() {

}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}