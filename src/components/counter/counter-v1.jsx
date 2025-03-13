import { useState } from "react";


const DEFAULT_COUNT = 0;

export default function Counter({ step = 1 }) {

    const [count, setCount] = useState(DEFAULT_COUNT);

    const handleIncr = () => {
        console.log(`Avant setCount :${count}`);
        setCount(count => count + step);
        console.log(`Après setCount :${count}`);
    };

    const handleReset = () => {
        setCount(DEFAULT_COUNT);
    };

    console.log(`Render ${count}`);
    return (
        <>
            <p>{count}</p>
            <div>
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