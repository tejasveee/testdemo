const express = require("express");
const app = express();
const port = 3000;

var users = [
  {
    name: "Tejasvee",
    city: "Raipur",
  },
  {
    name: "Aditya",
    city: "Bilaspur",
  },
  {
    name: "Janhavi",
    city: "Bhilai",
  },
  {
    name: "Mohak",
    city: "Raigarh",
  },
  {
    name: "Krish",
    city: "Jabalpur",
  },
];
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ call: "Hello get", msg: "Success", users: users });
});

app.post("/", (req, res) => {
  const user = request.body;
  users.push(user);
  res.json({ call: "Hello post", msg: "Success", users: users });
});

app.put("/", (req, res) => {
  res.json({ call: "Hello put", msg: "Success" });
});

app.delete("/", (req, res) => {
  const index = req.query.index;
  users.splice(index, 1);
  res.json({ call: "Hello delete", msg: "Success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
