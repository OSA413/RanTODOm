import Overlay from "./overlay";
import TodoList from "./List/List";
import Header from "./header/header";
import { useReducer, useState } from "react";
import Settings from "./Settings/Settings";

const Main = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [settingsVisible, setSettingsVisible] = useState(false);

    return (
        <div>
            <Settings shown={settingsVisible} setShown={setSettingsVisible} update={forceUpdate}/>
            <Overlay update={forceUpdate} setSettingsVisible={setSettingsVisible}/>
            <Header setShown={setSettingsVisible}/>
            <TodoList/>
        </div>
    )
}

export default Main