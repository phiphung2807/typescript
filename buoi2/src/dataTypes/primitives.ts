//string
const str:string ="hello";
let str2:string ="string";

//number
const num:number = 10;

//boolean
const trangthai = 1>2;

//null-undefile
let num2:number;
console.log(typeof num2);

//array

const array: Array<number> = [1,2,3]
const array2: Array<string> =["1", "2","3"]
const array3: Array<Array<string>> = [["a","b","c" ],["d","e"]]

//tuples
const tuples: [string,string,number] = ["Phi","Thao",1]

//enum
enum ROLE{Admin,User}
const role:ROLE = ROLE.Admin
// console.log(role);

enum STATUS_CODE {SUCCESS =200,CLIENT_ERROR=400,SERVER_ERROR=500}
const code = STATUS_CODE.SUCCESS

var showInfo = function (name, age) {
    if (typeof name == "string") {
        console.log(name.toUpperCase());
    }
};
showInfo("Duy", "20");

