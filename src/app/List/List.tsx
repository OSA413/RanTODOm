import { List, ListElement } from "./ListInterface"

const TodoElement = (element: ListElement) => {
    return (
        <div key={element.id}
        className="w-full h-16 my-2 bg-gray-100 rounded-lg">
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