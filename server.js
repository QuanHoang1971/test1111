const express = require("express");

const Pizza = require("./models/pizzaModel");

const app = express();
const db = require("./db.js");
app.use(express.json());
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`);
