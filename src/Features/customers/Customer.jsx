






export default function Customer({ customer }) {

    const { id, name } = customer


    return (

        <>
            <td>{id}</td>
            <td>{name}</td>

        </>


    )
}
