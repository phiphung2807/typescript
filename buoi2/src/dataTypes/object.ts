const sinhvien: { name: string, grade: number, hometown: string, age: number } = {
    name: "Tài",
    grade: 5,
    age: 20,
    hometown: "Thái Bình",
}

const sinhvien2: { name: string, grade: number, hometown: string, age: number } = {
    name: "Thanh",
    grade: 5,
    age: 20,
    hometown: "Nam Định",
}

// const book: {authors: {id: number, name: string, slug: string}[], book_cover?: string, categories: {id: number, name: string, is_leaf: boolean}}
interface IBook {
    authors: Author[],
    book_cover?: string,
    categories: { id: number, name: string, is_leaf: boolean },
    description: string,
    images: Image[]
}

interface Author {
    id: number,
    name: string,
    slug: string
}

interface Image {
    base_url: string,
    is_gallery: boolean,
    label: string,
    large_url: string
}

// const book1: Book = {

// }

// const book2: Book = {

// }

// interface

// interface User {
//     id:number,
//     userName:string,
//     password:string,
//     email:string,
// }

enum LEVEL {MANAGER,STAFF}

// interface Admin extends User {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF,
// }

// properties

// interface User {
//     //union type
//     id: string | number,
//     userName:string,
//     password:string,
//     email:string,
// }