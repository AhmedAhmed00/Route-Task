import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Heading from './Heading';
import Filter from './Filter';
import useDb from './../Features/hooks/useDb';
import { useState } from "react";


const StyledAppLayout = styled.main`
max-width: 1220px;
margin: auto;

`

export default function AppLayout({ children }) {

    return (

        <StyledAppLayout   >
            <Outlet />
        </StyledAppLayout >

    )
}
