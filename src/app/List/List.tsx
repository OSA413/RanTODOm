import React, { useReducer } from "react"
import DataProvider from "../DataProvider"
import { ListElement } from "./ListInterface"

const TodoElement = (element: ListElement, index: number, forceUpdate: React.DispatchWithoutAction) => {
    const del = () => {
        DataProvider.Table.Delete(element.id);
        forceUpdate();
    }

    return (
        <div key={index}
        className="w-full h-16 my-2 bg-gray-100 rounded-xl text-3xl flex items-center px-4">
            <div className="w-12 text-right">{index}</div>
            <div className="w-0.5 h-5/6 bg-gray-400 mx-3"/>
            <div className="">{element.description}</div>
            <div className="ml-auto select-none cursor-pointer"
            onClick={del}>❌</div>
        </div>
    )
}

const TodoList = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    let elements = DataProvider.Table.Get().elements.map((x, i) => TodoElement(x, i + 1, forceUpdate))

    return (
        <div className="px-4">
            {elements}
        </div>
    )
}

export default TodoList;