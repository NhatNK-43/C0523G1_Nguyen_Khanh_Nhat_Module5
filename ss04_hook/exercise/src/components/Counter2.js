const {useState} = require("react");

export function Counter2() {
    const [count, setCounter] = useState(0);
    const increase = () => {
        setCounter(prev => prev + 1)
        setCounter(prev => prev + 1)
    }
    return (
        <>
            <h3>Count 2: {count}</h3>
            <button onClick={increase}>Add 2</button>
        </>
    )
}