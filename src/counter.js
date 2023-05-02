import React, { useState } from 'react'; // import react  library 


function Counter() {  //functional component
    const [count, setCount] = useState(0);
    // initial state
    const handleIncrement = () => {  //event handler to increment 
        setCount(count + 1);
    };

    const handleDecrement = () => { //event handler to increment 
        setCount(count - 1);
    };

    return (   // JSX code 
        // make sure you bind your code in a div which needs tyo be returned
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;