const express = require("express")
const connectDB = require("./config/connectDB")
const app = express()
const path=require("path")

const PORT = 5000

app.use(express.json())


app.use("/api/auth", require("./routes/auth"))
app.use("/api/conference", require("./routes/conference"))
app.use("/api/article", require("./routes/article"))
app.use("/api/uploads", require("./routes/uploadRoute"));

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
connectDB()

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})