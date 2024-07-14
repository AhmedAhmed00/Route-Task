

mini web app that retrieves customer and transaction data from JSON server, presenting it in a user-friendly format with these features:
Interactive table: every customer can have many transactions so I applied the render props pattern in this app to render each user's transaction amounts and IDs and date
filtering options by customer name or transaction amount for quick insights.
Graphical representation Visualizes total daily transaction amounts for selected customers, enhancing data interpretation.
, I also implemented other functions like formatting dates and prices for enhanced usability, a function to combine transaction data in one object if they happen on the same day, and adding the amounts of them before rendering in the graph, etc.

Live demo: https://lnkd.in/dDcikDEw
Live Demo : https://customer-transactions1.netlify.app/
