const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("it is running wow"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
