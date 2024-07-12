

export async function getCustomers() {
    const res = await fetch("http://localhost:9000/customers")
    const data = await res.json()
    if (!data) throw new Error("error while fetching cusomers")
    return data

}


