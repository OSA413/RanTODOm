import { List, ListElement } from "./ListInterface"

const TodoElement = (element: ListElement) => {
    return (
        <div key={element.id}
        className="w-full h-16 my-2 bg-gray-100 rounded-lg text-3xl flex items-center px-4">
            <div className="w-12 text-right">{element.id}</div>
            <div className="w-0.5 h-5/6 bg-gray-400 mx-3"/>
            <div className="">{element.description}</div>
        </div>
    )
}

const TodoList = () => {
    let a: List = {
        "elements": [
            {
                id: 1,
                description: "gbreiognreio"
            },
            {
                id: 2,
                description: "gbreiognreio"
            },
            {
                id: 3,
                description: "gbreiognreio"
            }
        ]       
    }

    let elements = a.elements.map(TodoElement)

    return (
        <div>
            {elements}
        </div>
    )
}

export default TodoList;