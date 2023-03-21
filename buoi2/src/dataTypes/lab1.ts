
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

// console.log(bubbleSort(arr));

const numArr = [1,9,8,3,5]
function sort<T>(array: T[], callback?: (a: T, b: T) => number): T[] {
    const newArr = [...array];
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            const res = callback
                ? callback(newArr[i], newArr[j])
                : typeof newArr[i] === "string"
                ? String(newArr[i]).localeCompare(String(newArr[j]))
                : Number(newArr[i]) - Number(newArr[j]);
            if (res > 0) {
                const temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
}

const numArr2 = sort(numArr, (a, b) => b - a);
console.log(numArr2);