import React from 'react'
import { useState } from 'react'


export default function counter(x: any) {
    const [count, setCount] = useState(0)
    return (
        // <div>counter</div>
        <button onClick={() => setCount((count) => count + x.p)}>
            count is {count}
        </button>
    )
}
