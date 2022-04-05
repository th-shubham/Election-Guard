//! for securing credentials of MongoDB Atlas
require("dotenv").config();

//! importing dependencies
const express = require("express");
const ejs = require("ejs");
const app = express();
const _ = require("lodash");
const mongoose = require("mongoose");
const mongoConnectionURI = process.env.MONGO_URI;

//! Routers
const DeleteRouter = require("./routes/Delete");
const UpdateRouter = require("./routes/Update");
const ReportsRouter = require("./routes/Reports");
const ComposeRouter = require("./routes/Compose");
const ReportRouter = require("./routes/Report");
const LatestRouter = require("./routes/Latest");
const HomeRouter = require("./routes/Home");

//! Use Routers
app.use(DeleteRouter);
app.use(UpdateRouter);
app.use(ReportsRouter);
app.use(ComposeRouter);
app.use(ReportRouter);
app.use(LatestRouter);
app.use(HomeRouter);

//! Set View Engine
app.set("view engine", "ejs");

//! Serve static files
app.use(express.static("public"));

mongoose.connect(mongoConnectionURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.listen(3000 || process.env.PORT, () => {
	console.log("Server started on port 3000");
});
