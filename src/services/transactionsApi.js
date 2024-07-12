

export async function getTransactions(id) {

    let query = "http://localhost:9000/transactions"
    if (id) query += `?customer_id=${id}`
    const res = await fetch(query)
    const data = await res.json()
    if (!data) throw new Error("error while fetching transactions")
    console.log(data);
    return data

}

// export async function getSpecificTranaction(id) {
//     const res = await fetch(`http://localhost:9000/transactions?customer_id=${id}`)
//     const data = await res.json()
//     if (!data) throw new Error("error while fetching transactions")
//     console.log(data);
//     return data

// }