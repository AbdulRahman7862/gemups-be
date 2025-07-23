require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


const connectDb = require("./config/connectDb");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const proxyProductRoutes = require("./routes/proxyProductRoutes");

connectDb();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/proxies", proxyProductRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})