import React from 'react'
import Book from './Book'

type Props = {}

const Container = (props: Props) => {
    return (
        <div>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
    )
}

export default Container