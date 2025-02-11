const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
const cookiesMiddleware = require("./middlewares/cookies");
const productRoutes = require("./routes/productRoutes");
const catalogRoutes = require("./routes/catalogRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const path = require("path");
const helmet = require("helmet");

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.options("*", cors());

// Allow requests from your frontend domain
app.use(
  cors({
    origin: [
      "https://client-portfolio-website.onrender.com",
      "http://localhost:5174",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      fontSrc: [
        "'self'",
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
      ],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  })
);

// Middleware for cookies
app.use(cookiesMiddleware);

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/catalog", catalogRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
