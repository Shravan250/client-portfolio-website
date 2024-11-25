const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const cookiesMiddleware = require("./middlewares/cookies");

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Middleware for cookies
app.use(cookiesMiddleware);

// Routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
