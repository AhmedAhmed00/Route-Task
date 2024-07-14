

export async function getCustomers(customerID) {
    // let url = new URL("http://localhost:9000/customers")
    let url = new URL("https://my-json-server.typicode.com/ahmedahmed00/customerTransactionsApi/customers")
    if (customerID) url.searchParams.set("id", customerID)
    const res = await fetch(url)
    const data = await res.json()
    if (!data) throw new Error("error while fetching cusomers")
    return data

}


