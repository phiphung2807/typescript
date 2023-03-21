//string
var str = "hello";
var str2 = "string";
//number
var num = 10;
//boolean
var trangthai = 1 > 2;
//null-undefile
var num2;
console.log(typeof num2);
//array
var array = [1, 2, 3];
var array2 = ["1", "2", "3"];
var array3 = [["a", "b", "c"], ["d", "e"]];
//tuples
var tuples = ["Phi", "Thao", 1];
//enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["Admin"] = 0] = "Admin";
    ROLE[ROLE["User"] = 1] = "User";
})(ROLE || (ROLE = {}));
var role = ROLE.Admin;
// console.log(role);
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.SUCCESS;
var showInfo = function (name, age) {
    if (typeof name == "string") {
        console.log(name.toUpperCase());
    }
};
showInfo("Duy", "20");
