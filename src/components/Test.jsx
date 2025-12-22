const Test = ({text, children}) => {
    return (
        <div className="bg-blue-500">
            <h1>
                {text}
            </h1>
            {children}
        </div>
    )
}

export default Test