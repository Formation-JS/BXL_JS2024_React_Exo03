import { useCallback, useMemo, useState } from "react";


const DEFAULT_COUNT = 0;

export default function Counter({ step = 1, decr = false }) {
    
    //! useMemo -> Stock en cache un resultat
    const stepArray = useMemo(() => {
        console.log("Memo !");
        return (typeof (step) === 'number') ? [step] : step;
    }, [step]);

    const [count, setCount] = useState(DEFAULT_COUNT);

    //! useCallback -> Stock en cache une fonction
    const BtnCount = useCallback(({ innerStep }) => {
        console.log("useCallback !");
        
        const handleInnerBtn = () => {
            setCount(count => count + innerStep);
        };

        return (
            <button onClick={handleInnerBtn}>
                {innerStep > 0 ? '+' : '-'}
                {' '}
                {Math.abs(innerStep)}
            </button>
        );
    }, []);

    const handleReset = useCallback(() => {
        setCount(DEFAULT_COUNT);
    }, [DEFAULT_COUNT]);

    console.log(`Render ${count}`);
    return (
        <>
            <p>{count}</p>
            <div>
                {decr && stepArray.toReversed().map(s => (
                    <BtnCount key={'decr' + s} innerStep={-s} />
                ))}
                {stepArray.map(s => (
                    <BtnCount key={'incr' + s} innerStep={s} />
                ))}
            </div>
            {count !== DEFAULT_COUNT && (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            )}
        </>
    );
}