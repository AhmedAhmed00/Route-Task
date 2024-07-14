import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'


const StyledAppLayout = styled.main`


@media only screen and (min-width: 768px)  {
    width: 100%;
 
}
@media only screen and (min-width: 992px)  {
    width: 920px;  
}
@media only screen and (min-width: 1200px)  {
    width: 1190px;  
     
}
@media only screen and (min-width: 1400px)  {
    width: 1320px;  
     
}

min-height: 100vh;
padding: 30px 10px;
margin: auto; 

`

export default function AppLayout({ children }) {

    return (

        <StyledAppLayout   >
            <Outlet />
        </StyledAppLayout >

    )
}
