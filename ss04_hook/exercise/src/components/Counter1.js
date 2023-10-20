const {useState} = require("react");

export function Counter1() {
    const [count, setCounter] = useState(0);
    const increase = () => {
        setCounter(prev => prev + 1)
    }
    return (
        <>
            <h3>Count 1: {count}</h3>
            <button onClick={increase}>Add 1</button>
        </>
    )
}