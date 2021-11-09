const donate = () => {
    window.open("https://ko-fi.com/osa413");
}

const Header = () => {
    return (
        <div className="w-full h-16 mb-4 flex bg-blue-400 justify-between">
            <div className="text-white font-bold self-center w-16 text-center text-5xl"></div>
            <div className="text-white font-bold self-center text-center text-5xl">RanTODOm</div>
            <div className="text-white font-bold self-center text-center text-xl mx-4 p-2 bg-red-400 rounded-lg"
            onClick={donate}>☕ Donate</div>
        </div>
    )
}

export default Header;