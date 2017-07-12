import React from 'react'

export default ({ text, completed }) => {
    return (
        <li>
            <input type="checkbox" />
            <span>{text}</span>
            <span>X</span>
        </li>
    )
}