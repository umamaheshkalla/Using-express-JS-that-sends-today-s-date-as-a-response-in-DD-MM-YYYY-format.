const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let dateTime = new Date();
  response.send(
    `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}`
  );
});
app.listen(3000);

module.exports = app;
