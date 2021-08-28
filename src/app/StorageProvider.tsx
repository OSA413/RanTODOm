import { List } from "./List/ListInterface";

enum StorageType {
    "localstorage"
}

interface Storage {
    LoadData(): List;
    SaveData(list :List): void;
}

class StorageProvider {
    static storageType = StorageType.localstorage;
    static storage?: Storage;

    static Init = () => {
        let localStorageType = localStorage.getItem("storageType");
        if (localStorageType !== null) {
            StorageProvider.storageType = StorageType[localStorageType as keyof typeof StorageType];
            switch (StorageProvider.storageType) {
            }
        }
        else {
            StorageProvider.storage = new localStorageProvider();
        }
    }

    static LoadData = () => StorageProvider.storage?.LoadData();
    static SaveData = (list: List) => StorageProvider.storage?.SaveData(list);
}

class localStorageProvider implements Storage {
    LoadData = () :List =>{
        return {
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

    SaveData = (list: List) => {
        localStorage.setItem("list", JSON.stringify(list));
    }
}

export default StorageProvider;