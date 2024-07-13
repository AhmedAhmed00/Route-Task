





export function formatDate(dateStr) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(dateStr));
}


export function formatPrice(price) {
    price = new Intl.NumberFormat('en', {
        style: "currency",
        currency: "EGP",
        maximumFractionDigits: "0"
    }).format(price)
    return price

}


export const sumAmountsByDate = (transactions) => {
    const result = {};

    transactions.forEach(transaction => {
        const { id, customer_id, date, amount } = transaction;
        if (result[date]) {
            result[date].amount += amount;
        } else {
            result[date] = { id, customer_id, date, amount };
        }
    });

    return Object.values(result);

};
