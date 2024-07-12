import React from 'react'
import { useNavigate } from 'react-router-dom'
import Transactions from '../transactions/Transactions'

export default function Customer({ customer }) {

    const { id, name } = customer
    const navigate = useNavigate()

    return (

        <>
            <td>{id}</td>
            <td>{name}</td>
        </>


    )
}
