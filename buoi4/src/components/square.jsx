
const Square = ({ value, handlePlay }) => {
    const handleSquare = () => {
        if (!value) {
            handlePlay()
        }
    };
    
    
    return <button
        onClick={handleSquare}
        className="w-[60px] h-[60px] bg-[#14bdac] text-3xl text-white">
        {value}
    </button>



}

export default Square