import Book from './Book';
import { useState, useEffect } from 'react';
import React from 'react'

type Props = {}


const Footer = (props: Props) => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <div>
            <h2>itzhak leshinski</h2>
            <p>
                {' '}
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
            </p>
            <p>
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                    second: 'numeric'
                })}
            </p>
        </div>
    )
}

export default Footer