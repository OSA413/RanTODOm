import { List } from "./interfaces/ListInterface";
import { saveAs } from "file-saver";

import Papa from "papaparse";

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
    static SaveData = (list: List) => {
        StorageProvider.storage?.SaveData(list);
        let csvText = Papa.unparse(list.elements.map(e => [e.description]));
        //var blob = new Blob([csvText], {type: "text/csv;charset=utf-8"});
        //saveAs(blob, "My RanTODOm list.csv");
        let data = Papa.parse(csvText).data.flat()
        console.log(data);
    }
}

class localStorageProvider implements Storage {
    LoadData = () :List =>{
        return JSON.parse(localStorage.getItem("list") ?? "{ \"elements\": []}");
    }

    SaveData = (list: List) => {
        localStorage.setItem("list", JSON.stringify(list));
    }
}

export default StorageProvider;