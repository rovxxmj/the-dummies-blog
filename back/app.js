require("dotenv/config");
const express = require("express");

const app = express();
app.get("PORT", process.env.PORT || 3001);

app.listen(app.get("PORT"), () => console.log("서버 연걸"));
