import Overlay from "./overlay";
import TodoList from "./List/List";
import Header from "./header/header";
import { useReducer } from "react";

const Main = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    return (
        <div>
            <Overlay update={forceUpdate}/>
            <Header />
            <TodoList/>
        </div>
    )
}

export default Main