const Header = ({setShown}:{setShown: (x:boolean)=>any}) => {
    const donate = () => {
        window.open("https://ko-fi.com/osa413");
    }
    
    const showSettings = () => {
        setShown(true);
    }
    
    return (
        <div className="w-full h-16 mb-4 flex bg-blue-400 justify-between">
            <div className="text-white font-bold self-center text-center text-xl mx-4 p-2 bg-blue-700 rounded-lg"
            onClick={showSettings}>⚙ Settings</div>
            <div className="text-white font-bold self-center text-center text-5xl">RanTODOm</div>
            <div className="text-white font-bold self-center text-center text-xl mx-4 p-2 bg-red-400 rounded-lg"
            onClick={donate}>☕ Donate</div>
        </div>
    )
}

export default Header;