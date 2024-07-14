import { FaUser } from "react-icons/fa"
import styled from "styled-components"
import { TdHasIcon } from "../../ui/TdHasIcon"




export const Id = styled.td`
color:  var(--color-green);
margin: 0;
font-weight: 600;
font-size:18px;

`



const Name = styled.h2`
    font-size:18px;
    font-weight: 600;


`


export default function Customer({ customer }) {

    const { id, name } = customer


    return (

        <>
            <Id>
                {id}
            </Id>
            <td>
                <TdHasIcon>
                    <FaUser />
                    <Name>{name}</Name>
                </TdHasIcon>
            </td>
        </>


    )
}
