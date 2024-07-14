import React from 'react'

export default function List({ items, render }) {
    return (
        <td>
            <ul>
                {items.map(render)}
            </ul>
        </td>

    )
}
