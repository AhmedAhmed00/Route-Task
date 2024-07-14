

export async function getTransactions(id) {

    // let query = "http://localhost:9000/transactions?"
    let query = "https://my-json-server.typicode.com/ahmedahmed00/customerTransactionsApi/transactions?"
    if (id) query += `?customer_id=${id}`
    // if (amount) query += `amount=${amount}`

    const res = await fetch(query)
    const data = await res.json()
    if (!data) throw new Error("error while fetching transactions")
    return data

}

// export async function searchTransactions(amount) {
//     const res = await fetch(`http://localhost:9000/transactions?amount=${amount}`)
//     const data = await res.json()
//     if (!data) throw new Error("error while fetching transactions")
//     return data

// }