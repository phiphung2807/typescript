// import Avatar from "./components/avatar"
// import { useState } from "react"
import Board from "./components/board"
import Counter from "./components/counter"

// Props: Là một đối tượng, để truyền dữ liệu từ cha xuống con, nhưng không có chiều ngược lại
// Props: Immutable >< mutable
// State: Trạng thái (bộ nhớ) của component - Cho phép component thay đổi khi tương tác
// const App = () => {
//     const user = {
//         name: "Le Tuan Viet",
//         role: "Student"
//     }
//     return <>
//         {/* Declarative */}
//         <h1>Hello world</h1>
//         <h2>{user.name}</h2>
//         <Avatar name={user.name} user={user} showInfo={() => console.log(user.name)}/>
//     </>
// }
// const App = () => {
//     const [count, setCount] = useState(10)
//     // let count = 10

//     const increase = () => {
//         setCount(count + 1)
//         console.log(count); // count
//     }

//     return <div className="flex justify-center items-center h-[100vh]">
//         <div>Count: {count}</div>
//         <button onClick={increase} className="bg-red-300">+1 count</button>
//     </div>
// }


const App = () => {
    return (
        <>

<div className="flex justify-center items-center h-[100vh]">
        <Counter/>
    </div>
        </>
    )


}

export default App