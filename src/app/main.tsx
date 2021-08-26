import Overlay from "./overlay";
import TodoList from "./List/List";
import Header from "./header/header";

const Main = () => {
    return (
        <div>
            <Overlay />
            <Header />
            <TodoList/>
        </div>
    )
}

export default Main