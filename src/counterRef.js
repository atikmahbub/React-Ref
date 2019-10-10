import React,{useState , useEffect , useRef} from 'react'

function CounterRef() {
    const [counter, setCounter] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1)
        },1000)

        return () => {
            clearInterval(intervalRef.current)
        };
    },[])
    return (
        <div>
            <p>{counter}</p>
            <button onClick = {() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default CounterRef
