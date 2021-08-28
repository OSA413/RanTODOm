import { ListElement, List } from "./List/ListInterface";
import StorageProvider from "./StorageProvider";


class Table {
    static list: List;
    static Get = () => Table.list;
    static Add = (element: ListElement) => {
        Table.list.elements.push(element);
    }
    static Delete = (id: ListElement["id"]) => {
        Table.list.elements.splice(Table.list.elements.findIndex(x => x.id === id), 1);
        StorageProvider.SaveData(Table.Get());
    }

    static Init = (list?: List) => {
        Table.list = list ?? { elements: []};
    }
}

class DataProvider {
    static Table = Table;

    static Init = () => {
        StorageProvider.Init();
        Table.Init(StorageProvider.LoadData());
    } 
}

export default DataProvider;