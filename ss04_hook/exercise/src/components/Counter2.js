import {useIncrement} from "../customHook";

export function Counter2() {
    const [count, setCounter2] = useIncrement(2);
    const increase = () => {
        setCounter2();
    }
    return (
        <>
            <h3>Count 2: {count}</h3>
            <button onClick={increase}>Add 2</button>
        </>
    )
}