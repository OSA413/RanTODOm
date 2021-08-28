import { ListElement, List } from "./List/ListInterface";


class Table {
    static list: List;
    static Get = () => Table.list;
    static Add = (element: ListElement) => {
        Table.list.elements.push(element);
    }

    static Init = () => {
        Table.list = {
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
    }
}

class DataProvider {
    static Table = Table;

    static Init = () => {
        Table.Init();
    } 
}

export default DataProvider;