import React from 'react'
import styled from 'styled-components'




const StyledFilter = styled.div`
display: flex;
justify-content: center;
gap: 10px;

margin-bottom: 20px;
`


const Input = styled.input`

padding: 10px;
width: 50%;
font-size: 16px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
border: 1px solid #707FDD;
outline: none;

`







export default function Filter({ filter, setFilter }) {
    function handleNameChange(e) {
        setFilter({ ...filter, name: e.target.value }
        )
    }
    function handleAmountChange(e) {
        setFilter({ ...filter, amount: e.target.value }
        )

    }

    return (
        <StyledFilter>
            <Input onChange={handleAmountChange} type="text" placeholder='Filter by Amount' />
            <Input onChange={handleNameChange} type="text" placeholder='Filter by name' />
        </StyledFilter>
    )
}
