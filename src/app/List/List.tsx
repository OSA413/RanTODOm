import DataProvider from "../DataProvider"
import { List, ListElement } from "./ListInterface"

const TodoElement = (element: ListElement) => {

    const del = () => {
        DataProvider.Table.Delete(element.id);
    }

    return (
        <div key={element.id}
        className="w-full h-16 my-2 bg-gray-100 rounded-xl text-3xl flex items-center px-4">
            <div className="w-12 text-right">{element.id}</div>
            <div className="w-0.5 h-5/6 bg-gray-400 mx-3"/>
            <div className="">{element.description}</div>
            <div className="ml-auto select-none cursor-pointer"
            onClick={del}>❌</div>
        </div>
    )
}

const TodoList = () => {
    let a: List = DataProvider.Table.Get();

    let elements = a.elements.map(TodoElement)

    return (
        <div className="px-4">
            {elements}
        </div>
    )
}

export default TodoList;