import DataProvider from "./DataProvider";
import plus from "./../resources/plus.svg";
import { useRef } from "react";

const Overlay = ({update}: {update: ()=>any}) => {
    const input = useRef<HTMLInputElement>(null);

    const addItem = (): boolean => {
        if (input.current !== null && input.current.value !== "") {
            DataProvider.Table.Add(input.current.value);
            input.current.value = "";
            input.current.focus();
            update();
            return true;
        }
        return false;
    }

    const selectRandom = () => {
        DataProvider.Table.SelectedIndex = Math.round(Math.random() * (DataProvider.Table.Get().elements.length - 1));
        update();
    }

    return (
        <div className="w-full fixed bottom-4 px-4 flex gap-4">
            <input type="text" className="input-bar" placeholder="Enter TODO text" ref={input} autoFocus
            onKeyPress={e => e.key === "Enter" && (addItem() || selectRandom())}/>
            <div className="overlay-button" onClick={selectRandom}>🎲</div>
            <div className="overlay-button" onClick={addItem}><img src={plus} alt="+"/></div>
        </div>
    )
}

export default Overlay;