import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'


const StyledAppLayout = styled.main`
max-width: 1320px;
min-height: 100vh;
padding: 30px 0px;
margin: auto;

`

export default function AppLayout({ children }) {

    return (

        <StyledAppLayout   >
            <Outlet />
        </StyledAppLayout >

    )
}
