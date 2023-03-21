// const arr = [4,2,6,7,9,1,"5","13"];
//   function bubbleSort<T>(arr: T[]): T[] {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//     return arr;
//   }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log(bubbleSort(arr));
var numArr = [1, 9, 8, 3, 5];
function sort(array, callback) {
    var newArr = __spreadArray([], array, true);
    for (var i = 0; i < newArr.length - 1; i++) {
        for (var j = i + 1; j < newArr.length; j++) {
            var res = callback
                ? callback(newArr[i], newArr[j])
                : typeof newArr[i] === "string"
                    ? String(newArr[i]).localeCompare(String(newArr[j]))
                    : Number(newArr[i]) - Number(newArr[j]);
            if (res > 0) {
                var temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
}
var numArr2 = sort(numArr, function (a, b) { return b - a; });
console.log(numArr2);
