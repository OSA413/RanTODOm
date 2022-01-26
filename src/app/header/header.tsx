const Header = ({setShown}:{setShown: (x:boolean)=>any}) => {
    const donate = () => {
        window.open("https://ko-fi.com/osa413");
    }
    
    const showSettings = () => {
        setShown(true);
    }
    
    return (
        <div className="w-full h-16 sm:mb-4 flex bg-blue-400 justify-between">
            <div className="hidden sm:block text-white font-bold self-center text-center text-xl mx-4 p-2 bg-blue-700 rounded-lg cursor-pointer"
            onClick={showSettings}>⚙ Settings</div>
            <div className="sm:hidden text-white font-bold self-center text-center text-xl mx-4 p-2 bg-blue-700 rounded-lg cursor-pointer"
            onClick={showSettings}>⚙</div>
            <div className="text-white font-bold self-center text-center text-3xl sm:text-5xl select-none">RanTODOm</div>
            <div className="hidden sm:block text-white font-bold self-center text-center text-xl mx-4 p-2 bg-red-400 rounded-lg cursor-pointer"
            onClick={donate}>☕ Donate</div>
            <div className="sm:hidden text-white font-bold self-center text-center text-xl mx-4 p-2 bg-red-400 rounded-lg cursor-pointer"
            onClick={donate}>☕</div>
        </div>
    )
}

export default Header;