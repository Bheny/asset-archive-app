import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 100) {
            const timer = setTimeout(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [count]);

    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
};

export default Counter;
