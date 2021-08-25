import { Component } from "react"
import Overlay from "./overlay"

class Main extends Component {

    render() {

        let a = (<div className="w-full h-16 my-2 bg-gray-100 rounded-lg"></div>)

        return (
            <div>
                <Overlay />
                <div className="w-full h-16 mb-4 flex bg-blue-400 justify-between">
                    <div className="text-white font-bold self-center w-16 text-center text-5xl">≡</div>
                    <div className="text-white font-bold self-center text-center text-xl mx-4 p-2 bg-blue-600 rounded-lg">Save</div>
                </div>
                <div>
                    {a}
                    {a}
                    {a}
                </div>
            </div>
        )
    }
}

export default Main