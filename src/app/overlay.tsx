const Overlay = () => {
    let buttons = ["🎲", "+"].map(Button);
    return (
        <div className="fixed right-4 bottom-4 flex gap-4">
            {buttons}
        </div>
    )
}

const Button = (content: string) => {
    return (
        <div className="h-16 w-16 rounded-full bg-blue-900 text-white grid place-items-center font-bold text-4xl align-middle select-none">
            {content}
        </div>
    )
}

export default Overlay;