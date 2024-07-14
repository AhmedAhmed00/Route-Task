import React from 'react'
import styled from 'styled-components'

const StyledLoader = styled.span`

    width: 80px;
    height: 80px;
    border: 5px solid var(--color-blue);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
    `

const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    `


export default function Loader() {
    return (

        <LoaderContainer>
            < StyledLoader />
        </LoaderContainer>
    )
}
