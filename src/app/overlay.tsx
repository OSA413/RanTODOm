import DataProvider from "./DataProvider";

const Overlay = () => {
    return (
        <div className="fixed right-4 bottom-4 flex gap-4">
            <div className="overlay-button">🎲</div>
            <div className="overlay-button"
                onClick={() => {
                    DataProvider.Table.Add({description: "dsadsa", id: 123});
                }}>+</div>
        </div>
    )
}

export default Overlay;