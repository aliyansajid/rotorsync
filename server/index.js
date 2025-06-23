const express = require("express");
const authRoutes = require("./routes/auth");
const bmsRoutes = require("./routes/bms");
const mopekaRoutes = require("./routes/mopeka");
const trailerRoutes = require("./routes/trailer");
const userRoutes = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/bms", bmsRoutes);
app.use("/api/mopeka", mopekaRoutes);
app.use("/api/trailers", trailerRoutes);
app.use("/api/users", userRoutes);

app.listen(5000, async () => {
  console.log("Server running on http://localhost:5000");
});
