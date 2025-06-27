import { useState } from "react";

function Myapp(){
    const [count, setCount] = useState(0);
    return(
        <>
            <h1>My Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
}

export default Myapp;