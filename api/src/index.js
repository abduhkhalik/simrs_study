const express = require("express");
const cors = require("cors");
const PORT = 5000;
const app = express();
const userRoute = require("../routes/user");
const authRoute = require("../routes/auth");
const patientRoute = require("../routes/patient");
const itemRoute = require("../routes/item");
const actionRoute = require("../routes/action");
const db = require("../config/db");
const logger = require("../middelware/logger");
const requestTime = require("../middelware/requestTime");
const errorHandler = require("../middelware/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware
app.use(logger);
app.use(requestTime);
app.use(errorHandler);

// Database
db.connect();

//  Routes
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/patient", patientRoute);
app.use("/action", actionRoute);
app.use("/item", itemRoute);

app.listen(PORT, () => {
  console.log(`Server Berjalan Di Port ${PORT}`);
});
