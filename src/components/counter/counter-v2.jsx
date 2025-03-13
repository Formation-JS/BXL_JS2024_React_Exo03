import { useState } from "react";


const DEFAULT_COUNT = 0;

export default function Counter({ step = 1, decr = false }) {

    const [count, setCount] = useState(DEFAULT_COUNT);

    const handleIncr = () => {
        setCount(count => count + step);
    };

    const handleDecr = () => {
        setCount(count => count - step);
    };

    const handleReset = () => {
        setCount(DEFAULT_COUNT);
    };

    console.log(`Render ${count}`);
    return (
        <>
            <p>{count}</p>
            <div>
                {decr && (
                    <button onClick={handleDecr}>- {step}</button>
                )}
                <button onClick={handleIncr}>+ {step}</button>
            </div>
            {count !== DEFAULT_COUNT && (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            )}
        </>
    );
}