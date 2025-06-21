const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(5000, async () => {
  console.log("Server running on http://localhost:5000");
});
