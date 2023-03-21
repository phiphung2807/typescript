// 1. Khai báo hàm (Function declaration)
function func1() {
    // Hoisting
    console.log("func1");
}

const func2 = function() {
    console.log("func2");
}

const func3 = () => {
    console.log("func3");
}

// 2. Function return
let num3: number; 
// function divide(): number {
//     return;
// }

// const showName = function(): string {
//     return;
// }

const func4 = function(): void{
    console.log("4");
}

const showError = function(): never {
    const err = new Error("Something went wrong!")
    throw err;
}

// 3. Function parameter
function divide(a: number, b: number = 1): number {
    return a / b;
}

console.log(divide(10,));


// const showName = function(ho:string, tendem:string,ten:string): string {
//     if (tendem =="") {
//     }

// }

// 4. Rest parameter
function printClass(name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn ".concat(name,  ).concat(classes.join(", "));
}
console.log(printClass("Hưng"));

// 5. Callback

// const numArr = [1,2,3,5,8,12];

// const result = numArr.map((item) => {
//     return item * item;
// })

// console.log(result);

// const we17307_map = function(arr:number[],callback?:(item:number)=>number){
//     const temp = []
//     for(let i = 0; i < arr.length; i++){
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp;
// }

// const result = we17307_map(numArr,(item) => {
//     return item * item
// })

// console.log(result);



