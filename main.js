
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