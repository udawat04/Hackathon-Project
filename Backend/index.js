require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { APP_PORT, DB_URL } = require("./config");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");
// const authRoutes = require("./routes/auth");

// Move these before routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session and passport middleware
app.use(cookieSession({
  name: "session",
  keys: ["sudarshan"],
  maxAge: 24 * 60 * 60 * 1000,
}));
app.use(passport.initialize());
app.use(passport.session());

// CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

// Routes
// app.use("/auth", authRoutes);
app.use(routes);

// listen on Port
app.listen(APP_PORT, () => {
  console.log(`app is conected on ${APP_PORT} port`);
});

app.use(express.static(__dirname + "/public"));
app.use("/upload", express.static("upload"));

// mongoose connection establish
mongoose.connect(DB_URL).then(() => console.log("Database Connected!"));
