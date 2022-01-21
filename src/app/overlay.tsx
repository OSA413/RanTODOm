import { createRef } from "react";
import DataProvider from "./DataProvider";

import plus from "./../resources/plus.svg";

const Overlay = ({update, setSettingsVisible}: {update: ()=>any, setSettingsVisible: (arg: boolean)=>any}) => {
    const setFocus = (ref: React.RefObject<HTMLInputElement>) => ref.current?.focus();
    const input = createRef<HTMLInputElement>();

    const focus = () => setTimeout(() => {
        if (["INPUT", "SELECT"].includes(document.activeElement?.tagName ?? "")) return;
        setFocus(input);
    }, 500)

    const addItem = (): boolean => {
        if (input.current === null) return false;

        let text = input.current.value.trim();
        if (text === "") return false;

        DataProvider.Table.Add(input.current.value);
        input.current.value = "";
        setFocus(input);
        update();
        return true;
    }

    const selectRandom = () => {
        DataProvider.Table.SelectedIndex = Math.round(Math.random() * (DataProvider.Table.Get().elements.length - 1));
        update();
    }

    return (
        <div className="w-full fixed bottom-4 px-4 flex gap-4">
            <input type="text" className="input-bar" placeholder="Enter TODO text" ref={input} autoFocus
            onKeyPress={e => e.key === "Enter" && (addItem() || selectRandom())}
            onBlur={focus}/>
            <div className="overlay-button" onClick={selectRandom}>🎲</div>
            <div className="overlay-button" onClick={addItem}><img src={plus} alt="+"/></div>
        </div>
    )
}

export default Overlay;