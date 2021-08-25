import Overlay from "./overlay";
import TodoList from "./List/List";

const Main = () => {
    return (
        <div>
            <Overlay />
            <div className="w-full h-16 mb-4 flex bg-blue-400 justify-between">
                <div className="text-white font-bold self-center w-16 text-center text-5xl">≡</div>
                <div className="text-white font-bold self-center text-center text-xl mx-4 p-2 bg-blue-600 rounded-lg">Save</div>
            </div>
            <TodoList/>
        </div>
    )
}

export default Main