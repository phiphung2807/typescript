// union type
// typeof

function printInfo(info: number | string){
    if(typeof info === "string" ){
        return info.charAt(0).toLocaleUpperCase()+info.slice(1);
    }
    return info;
}

console.log(printInfo("phi"));

//optional

function check(sinhvien?: {name: string, grade: number}) {
    if (!!sinhvien) {
        return sinhvien.name
    }
}


// Union type (in)
interface User {
    // union type
    id: string | number,
    username: string,
    password: string,
    email: string,
}

interface Admin extends User {
    id: string,
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}

function login(user: User | Admin): void {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    } else {
        console.log("Welcome to backs");
    }
}