import { useState } from "react";

export const useIncrement = (step) => {
    const [value, setValue] = useState(0);
    const changeValue = () => {
        setValue((prev) => prev + step)
    }
    return [value, changeValue]
}