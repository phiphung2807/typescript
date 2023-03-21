// union type
// typeof
function printInfo(info) {
    if (typeof info === "string") {
        return info.charAt(0).toLocaleUpperCase() + info.slice(1);
    }
    return info;
}
console.log(printInfo("phi"));
//optional
function check(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
function login(user) {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome to backs");
    }
}
