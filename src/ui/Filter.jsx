import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Filter({ filter, setFilter }) {
    const [searchParams, setSearchParams] = useSearchParams()
    function handleNameChange(e) {
        setFilter({ ...filter, name: e.target.value }
        )
        // searchParams.set("name", e.target.value)
        // setSearchParams(searchParams)
    }
    function handleAmountChange(e) {
        setFilter({ ...filter, amount: e.target.value }
        )
        // searchParams.set("amount", e.target.value)
        // setSearchParams(searchParams)
    }

    return (
        <div>
            <input onChange={handleAmountChange} type="text" placeholder='filter By Amount' />
            <input onChange={handleNameChange} type="text" placeholder='filter by name' />
        </div>
    )
}
