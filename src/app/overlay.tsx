import { Component } from "react";

class Overlay extends Component {
    render () {
        return (
            <div className="absolute right-4 bottom-4 flex">
                <div className="h-16 w-16 rounded-full bg-gray-700 text-white flex justify-center items-center font-bold text-4xl align-middle">
                    +
                </div>
            </div>
        )
    }
}

export default Overlay;