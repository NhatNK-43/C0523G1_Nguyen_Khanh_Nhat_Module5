import {useIncrement} from "../customHook";

export function Counter1() {
    const [count, setCounter] = useIncrement(1);
    const increase = () => {
        setCounter();
    }
    return (
        <>
            <h3>Count 1: {count}</h3>
            <button onClick={increase}>Add 1</button>
        </>
    )
}